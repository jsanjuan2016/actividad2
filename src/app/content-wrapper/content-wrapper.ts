import { RouterLink, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content-wrapper',
  imports: [RouterOutlet],
  templateUrl: './content-wrapper.html',
  styleUrl: './content-wrapper.css'
})
export class ContentWrapper {

    //PRUEBAS
    onActivate(componentRef: any) {
    // componentRef is the instance of the component being activated
    console.log('New component ContentWrapper activated:', componentRef);
    // Example: set a property on the activated component
    componentRef.someProperty = 'some value from parent';
  }
  onDeactivate(componentRef: any) {
    console.log('Component ContentWrapper deactivated:', componentRef);
  }
  onAttach(componentRef: any) {
    console.log('Component ContentWrapper attached:', componentRef);
  }
  onDetach(componentRef: any) {
    console.log('Component ContentWrapper detached:', componentRef);
  }
  //FIN PRUEBAS

}
