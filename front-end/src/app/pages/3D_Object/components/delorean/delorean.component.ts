import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import * as THREE from 'three';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';

@Component({
  selector: 'app-delorean-demo',
  templateUrl: './delorean.component.html',
  styleUrls: ['./delorean.component.scss']
})
export class DeloreanComponent implements AfterViewInit {
  @ViewChild('audio', {static: true}) audio: ElementRef | undefined;
  @ViewChild('audioVisualization', {static: true}) audioVisualization: ElementRef | undefined;
  @ViewChild('rendererContainer', {static: true}) rendererContainer: ElementRef | undefined;

  mp3 = 'assets/mp3/My_Delorean.mp3';
  model3D = 'assets/models/DeLorean_BlendSwap.obj';

  renderer3D: THREE.WebGLRenderer | undefined;
  scene: THREE.Scene | undefined;
  camera: THREE.PerspectiveCamera | undefined;
  mesh: THREE.Group | undefined;

  loading = true;

  ngAfterViewInit() {
    this.load3DModel();
    this.animateMusic();
  }

  load3DModel() {
    // 3D initialization
    this.renderer3D = new THREE.WebGLRenderer({
      antialias: true
    });
    if (this.renderer3D) {
      this.scene = new THREE.Scene();

      let loader = new OBJLoader();
      loader.load(this.model3D, (geometry: THREE.Group) => {
        this.loading = false;
        this.initLoadedGeometry(geometry);
        this.audio?.nativeElement.play();
      }, undefined, function (err: ErrorEvent) {
        console.error(err);
      });
    } else this.loading = false;
  }

  initLoadedGeometry(geometry: THREE.Group) {
    if (this.renderer3D && this.scene && this.rendererContainer) {
      const width = this.rendererContainer.nativeElement.clientWidth;
      const height = this.rendererContainer.nativeElement.clientHeight - 300;
      if (this.camera) {
        this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 100);
        this.camera.position.z = 7;
        this.camera.position.y = 3;
        this.renderer3D.setSize(width, height);

        const material = new THREE.MeshNormalMaterial();
        geometry.traverse((child: THREE.Object3D) => {
          if (child instanceof THREE.Mesh) {
            child.material = material;
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        this.mesh = geometry;
        this.scene.add(geometry);
        this.rendererContainer.nativeElement.appendChild(this.renderer3D.domElement)
        this.animate3D();
      }
    }
  }

  animate3D() {
    if (this.renderer3D && this.scene && this.camera && this.mesh) {
      window.requestAnimationFrame(() => this.animate3D());
      this.mesh.rotation.y -= 0.01;
      this.renderer3D.render(this.scene, this.camera);
    }
  }

  private animateMusic() {
    if (this.audio && this.audioVisualization) {
      const context = new AudioContext();
      const src = context.createMediaElementSource(this.audio.nativeElement);
      const analyser = context.createAnalyser();

      const canvas = this.audioVisualization.nativeElement;
      const WIDTH = window.innerWidth;
      const HEIGHT = 300;
      canvas.width = WIDTH;
      canvas.height = HEIGHT;

      src.connect(analyser);
      analyser.connect(context.destination);

      analyser.fftSize = 256;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const barWidth = (WIDTH / bufferLength) * 2.5;
      let barHeight;
      let x = 0;

      const ctx = canvas.getContext("2d");

      function renderFrame() {
        requestAnimationFrame(renderFrame);
        analyser.getByteFrequencyData(dataArray);

        x = 0;
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        for (let i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i];

          const r = barHeight + (25 * (i / bufferLength));
          const g = 250 * (i / bufferLength);
          const b = 50;

          ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
          ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

          x += barWidth + 1;
        }
      }

      renderFrame();
    }
  }
}
