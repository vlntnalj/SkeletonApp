import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class SQLiteService {

  private db!: SQLiteDBConnection;

  constructor() {}

  async initDB() {
    const isAvailable = await CapacitorSQLite.isAvailable();

    if (!isAvailable.result) {
      console.error('SQLite no está disponible en esta plataforma.');
      return;
    }

    this.db = await CapacitorSQLite.createConnection({
      database: 'condominioDB',
      version: 1
    });

    await this.db.open();
    await this.createTables();
  }

  // Crear tablas necesarias
  private async createTables() {
    const schema = `
      CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        password TEXT
      );

      CREATE TABLE IF NOT EXISTS logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        mensaje TEXT,
        fecha TEXT
      );
    `;

    await this.db.execute(schema);
  }

  async crearUsuario(email: string, password: string) {
    const query = `INSERT INTO usuarios (email, password) VALUES (?, ?)`;
    await this.db.run(query, [email, password]);
  }

  async obtenerUsuario(email: string) {
    const query = `SELECT * FROM usuarios WHERE email = ?`;
    const result = await this.db.query(query, [email]);
    return result.values?.[0] ?? null;
  }

  async obtenerUsuarios() {
    const result = await this.db.query('SELECT * FROM usuarios');
    return result.values ?? [];
  }

  async eliminarUsuario(id: number) {
    await this.db.run('DELETE FROM usuarios WHERE id = ?', [id]);
  }

  async login(email: string, password: string) {
    const user = await this.obtenerUsuario(email);

    if (!user) return false;
    if (user.password !== password) return false;

    // Guardar sesión en Storage
    await Preferences.set({
      key: 'session',
      value: JSON.stringify({ email })
    });

    return true;
  }

  async logout() {
    await Preferences.remove({ key: 'session' });
  }

  async isLoggedIn(): Promise<boolean> {
    const session = await Preferences.get({ key: 'session' });
    return !!session.value;
  }
}
