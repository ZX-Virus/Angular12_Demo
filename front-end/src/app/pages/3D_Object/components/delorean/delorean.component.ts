import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import * as THREE from 'three';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';
import {Object3D} from "three";

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

  renderer: any;
  scene: any;
  camera: any;
  mesh: any;
  audioRef: any;
  container3D: any;

  loading = true;

  ngAfterViewInit() {
    this.container3D = this.rendererContainer?.nativeElement;
    this.load3DModel();
    this.animateMusic();
  }

  load3DModel() {
    // 3D initialization
    this.renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    this.scene = new THREE.Scene();

    let loader = new OBJLoader();
    loader.load(this.model3D, geometry => {
      this.loading = false;
      this.initLoadedGeometry(geometry);
      (this.audioRef as any).play();
    }, undefined, function (err) {
      console.error(err);
    });
  }

  initLoadedGeometry(geometry: any) {
    const width = this.container3D.clientWidth;
    const height = this.container3D.clientHeight - 300;
    this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 100);
    this.camera.position.z = 7;
    this.camera.position.y = 3;
    this.renderer.setSize(width, height);

    const material = new THREE.MeshNormalMaterial();
    geometry.traverse((child: Object3D) => {
      if (child instanceof THREE.Mesh) {
        child.material = material;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    this.mesh = geometry;

    this.scene.add(geometry);

    this.rendererContainer?.nativeElement.appendChild(this.renderer.domElement)
    this.animate3D();
  }

  animate3D() {
    if (this.mesh) {
      window.requestAnimationFrame(() => this.animate3D());
      this.mesh.rotation.y -= 0.01;
      this.renderer.render(this.scene, this.camera);
    }
  }

  private animateMusic() {
    this.audioRef = this.audio?.nativeElement;
    const context = new AudioContext();
    const src = context.createMediaElementSource(this.audioRef as any);
    const analyser = context.createAnalyser();

    const canvas = this.audioVisualization?.nativeElement;
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
