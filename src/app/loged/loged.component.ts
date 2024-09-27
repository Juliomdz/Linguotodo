import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { getAuth, signOut } from "firebase/auth";
import {Howl, Howler} from 'howler';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@awesome-cordova-plugins/device-orientation/ngx'

@Component({
  selector: 'app-loged',
  templateUrl: './loged.component.html',
  styleUrls: ['./loged.component.scss'],
})
export class LogedComponent implements OnInit {

  lenguajeActual = "español";
  temaActual = "animales";

  deviceOrientation:any;

  constructor(private routerRecieved:Router, deviceOrientationRecieved:DeviceOrientation) {
    this.deviceOrientation = deviceOrientationRecieved;
  }

  spinnerMostrandose = true;

  ngOnInit() 
  {
    //--------SPINNER----------------------------------------------
    setTimeout( ()=> { this.spinnerMostrandose = false}, 2000);
    //-

    const auth = getAuth();
    
    try
    {
      if (auth.currentUser.email != null)
      {
        
      }
    }
    catch(e)
    {
      this.routerRecieved.navigate(['/home']);
    }
  }

  logOut()
  {
    const auth = getAuth();
    signOut(auth).then(() => 
    {
      // Sign-out successful.
      console.log("Cierre de sesión satisfactorio. Vuelva prontosss!");
      this.routerRecieved.navigate(['/home']);

    }).catch((error) => 
    {
      // An error happened.
      console.log(error);
    });
  }

  async itemClickeado(nroItemRecibido:number)
  {  
    this.reproducirSonido(nroItemRecibido);  
  }

  actualizarLenguaje(lenguaje:string)
  {
    let languageShowed = document.getElementById("language-showed");
    
    switch (lenguaje) 
    {
      case 'español':
      {
        languageShowed.innerHTML = document.getElementById("language-espanol").innerHTML;
        break;
      }
      case 'portugues':
      {
        languageShowed.innerHTML = document.getElementById("language-portugues").innerHTML;
        break;
      }
      case 'ingles':
      {
        languageShowed.innerHTML = document.getElementById("language-ingles").innerHTML;
        break;
      }
    }

    this.lenguajeActual = lenguaje;
    console.log(this.lenguajeActual);
  }

  actualizarTema(tema:string)
  {
    let themeShowed = document.getElementById("theme-showed");

    switch (tema) 
    {
      case 'animales':
      {
        themeShowed.innerHTML = document.getElementById("theme-animales").innerHTML;
        break;
      }
      case 'colores':
      {
        themeShowed.innerHTML = document.getElementById("theme-colores").innerHTML;
        break;
      }
      case 'numeros':
      {
        themeShowed.innerHTML = document.getElementById("theme-numeros").innerHTML;
        break;
      }
    }

    this.temaActual = tema;
    console.log(this.temaActual);
    this.actualizarBackground(this.temaActual)
  }

  reproducirSonido(itemClickeado:number)
  {
      let lenguajeActual = this.lenguajeActual;
      let temaActual = this.temaActual;

      switch (lenguajeActual) 
      {
        case "español":
        {
            switch (temaActual) 
            {
              case "colores":
              {
                switch (itemClickeado)
                {
                  case 1:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/colores/esp/rojo.m4a', 'rojo.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 2:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/colores/esp/azul.m4a', 'azul.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 3:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/colores/esp/verde.m4a', 'verde.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 4:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/colores/esp/amarillo.m4a', 'amarillo.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 5:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/colores/esp/rosa.m4a', 'rosa.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 6:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/colores/esp/violeta.m4a', 'violeta.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                }

                break;
              } 
              case "animales":
              {
                switch (itemClickeado)
                {
                  case 1:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/animales/esp/leon.m4a', 'leon.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 2:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/animales/esp/perro.m4a', 'perro.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 3:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/animales/esp/gato.m4a', 'gato.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 4:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/animales/esp/elefante.m4a', 'elefante.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 5:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/animales/esp/hormiga.m4a', 'hormiga.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 6:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/animales/esp/pajaro.m4a', 'pajaro.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                }

                break;
              }
              case "numeros":
              {
                switch (itemClickeado)
                {
                  case 1:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/numeros/esp/1.m4a', '1.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 2:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/numeros/esp/2.m4a', '2.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 3:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/numeros/esp/3.m4a', '3.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 4:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/numeros/esp/4.m4a', '4.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 5:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/numeros/esp/5.m4a', '5.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 6:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/numeros/esp/6.m4a', '6.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                }

                break;
              }
            }

          break;
        }
        case "ingles":
        {
          switch (temaActual) 
            {
              case "colores":
              {
                switch (itemClickeado)
                {
                  case 1:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/colores/ing/rojo.m4a', 'rojo.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 2:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/colores/ing/azul.m4a', 'azul.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 3:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/colores/ing/verde.m4a', 'verde.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 4:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/colores/ing/amarillo.m4a', 'amarillo.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 5:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/colores/ing/rosa.m4a', 'rosa.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 6:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/colores/ing/violeta.m4a', 'violeta.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                }

                break;
              } 
              case "animales":
              {
                switch (itemClickeado)
                {
                  case 1:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/animales/ing/leon.m4a', 'leon.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 2:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/animales/ing/perro.m4a', 'perro.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 3:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/animales/ing/gato.m4a', 'gato.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 4:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/animales/ing/elefante.m4a', 'elefante.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 5:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/animales/ing/hormiga.m4a', 'hormiga.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 6:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/animales/ing/pajaro.m4a', 'pajaro.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                }

                break;
              }
              case "numeros":
              {
                switch (itemClickeado)
                {
                  case 1:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/numeros/ing/1.m4a', '1.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 2:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/numeros/ing/2.m4a', '2.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 3:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/numeros/ing/3.m4a', '3.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 4:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/numeros/ing/4.m4a', '4.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 5:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/numeros/ing/5.m4a', '5.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 6:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/numeros/ing/6.m4a', '6.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                }

                break;
              }
          }

          break;
        }
        case "portugues":
        {

          switch (temaActual) 
            {
              case "colores":
              {
                switch (itemClickeado)
                {
                  case 1:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/colores/por/rojo.m4a', 'rojo.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 2:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/colores/por/azul.m4a', 'azul.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 3:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/colores/por/verde.m4a', 'verde.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 4:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/colores/por/amarillo.m4a', 'amarillo.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 5:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/colores/por/rosa.m4a', 'rosa.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 6:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/colores/por/violeta.m4a', 'violeta.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                }

                break;
              } 
              case "animales":
              {
                switch (itemClickeado)
                {
                  case 1:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/animales/por/leon.m4a', 'leon.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 2:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/animales/por/perro.m4a', 'perro.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 3:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/animales/por/gato.m4a', 'gato.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 4:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/animales/por/elefante.m4a', 'elefante.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 5:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/animales/por/hormiga.m4a', 'hormiga.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 6:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/animales/por/pajaro.m4a', 'pajaro.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                }

                break;
              }
              case "numeros":
              {
                switch (itemClickeado)
                {
                  case 1:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/numeros/por/1.m4a', '1.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 2:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/numeros/por/2.m4a', '2.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 3:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/numeros/por/3.m4a', '3.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 4:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/numeros/por/4.m4a', '4.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 5:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/numeros/por/5.m4a', '5.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                  case 6:
                  {
                    // Setup the new Howl.
                    const sound = new Howl({src: ['../../assets/sonidos-v2/numeros/por/6.m4a', '6.m4a']});
                    // Play the sound.
                    sound.play();
                    break;
                  }
                }

                break;
              }
          }

          break;
        }
      }
  }

  actualizarBackground(temaRecibido:string)
  {
    let item1 = document.getElementById("item1");
    let item2 = document.getElementById("item2");
    let item3 = document.getElementById("item3");
    let item4 = document.getElementById("item4");
    let item5 = document.getElementById("item5");
    let item6 = document.getElementById("item6");

    let item1_2 = document.getElementById("item1-2");
    let item2_2 = document.getElementById("item2-2");
    let item3_2 = document.getElementById("item3-2");
    let item4_2 = document.getElementById("item4-2");
    let item5_2 = document.getElementById("item5-2");
    let item6_2 = document.getElementById("item6-2"); 

    switch (temaRecibido)
    {
      case "animales":
      {
      
        item1.setAttribute("src","../../assets/buttons/animales/leon.jpg");
        item2.setAttribute("src","../../assets/buttons/animales/perro.PNG");
        item3.setAttribute("src","../../assets/buttons/animales/gato.jpg");
        item4.setAttribute("src","./../assets/buttons/animales/elefante.PNG");
        item5.setAttribute("src","../../assets/buttons/animales/hormiga.jpg");
        item6.setAttribute("src","../../assets/buttons/animales/pajaro.jpg");

        item1_2.setAttribute("src","../../assets/buttons/animales/leon.jpg");
        item2_2.setAttribute("src","../../assets/buttons/animales/perro.PNG");
        item3_2.setAttribute("src","../../assets/buttons/animales/gato.jpg");
        item4_2.setAttribute("src","./../assets/buttons/animales/elefante.PNG");
        item5_2.setAttribute("src","../../assets/buttons/animales/hormiga.jpg");
        item6_2.setAttribute("src","../../assets/buttons/animales/pajaro.jpg");

        break;
      }
      case "colores":
      {

        item1.setAttribute("src","../assets/buttons/colores/rojo.png");
        item2.setAttribute("src","../../assets/buttons/colores/azul.png");
        item3.setAttribute("src","../../assets/buttons/colores/verde.png");
        item4.setAttribute("src","../../assets/buttons/colores/amarillo.png");
        item5.setAttribute("src","../../assets/buttons/colores/rosa.png");
        item6.setAttribute("src","../../assets/buttons/colores/violeta.png");

        item1_2.setAttribute("src","../assets/buttons/colores/rojo.png");
        item2_2.setAttribute("src","../../assets/buttons/colores/azul.png");
        item3_2.setAttribute("src","../../assets/buttons/colores/verde.png");
        item4_2.setAttribute("src","../../assets/buttons/colores/amarillo.png");
        item5_2.setAttribute("src","../../assets/buttons/colores/rosa.png");
        item6_2.setAttribute("src","../../assets/buttons/colores/violeta.png");

        break;
      }
      case "numeros":
      {
        
        item1.setAttribute("src","../../assets/buttons/numeros/uno.png");
        item2.setAttribute("src","../../assets/buttons/numeros/dos.png");
        item3.setAttribute("src","../../assets/buttons/numeros/tres.png");
        item4.setAttribute("src","../../assets/buttons/numeros/cuatro.png");
        item5.setAttribute("src","../../assets/buttons/numeros/cinco.png");
        item6.setAttribute("src","../../assets/buttons/numeros/seis.png");

        item1_2.setAttribute("src","../../assets/buttons/numeros/uno.png");
        item2_2.setAttribute("src","../../assets/buttons/numeros/dos.png");
        item3_2.setAttribute("src","../../assets/buttons/numeros/tres.png");
        item4_2.setAttribute("src","../../assets/buttons/numeros/cuatro.png");
        item5_2.setAttribute("src","../../assets/buttons/numeros/cinco.png");
        item6_2.setAttribute("src","../../assets/buttons/numeros/seis.png");

        break;
      }
    }
  }

}


