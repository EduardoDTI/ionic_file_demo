import { Component } from '@angular/core';
import { ApiExternaService } from '../api-externa.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private api: ApiExternaService,
    private camera: Camera,
    private fileChooser: FileChooser
  ) { }

  openCamera() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      alert(base64Image);
      this.api.saveFile(base64Image).then(res => alert('Boa')).catch(error => alert(error.message));
    }, (err) => {
      alert(err)
    });
  }
  chooseFile() {
    this.fileChooser.open()
      .then(uri => {
        alert(uri);
        this.api.saveFile(uri).then(res => alert(res)).catch(error => alert(error.message));
      })
      .catch(e => console.log(e));
  }
}
