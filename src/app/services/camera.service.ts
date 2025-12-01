import { Camera, CameraResultType } from '@capacitor/camera';

async abrirCamara() {
  const imagen = await Camera.getPhoto({
    quality: 80,
    resultType: CameraResultType.DataUrl
  });

  this.foto = imagen.dataUrl;
}
import { Injectable } from '@angular/core';