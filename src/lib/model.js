import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

export function loadGLTFModel(
    scene,
    mixers,
    glbPath,
    options = { receiveShadow: true, castShadow: true }
) {
    const { receiveShadow, castShadow } = options;
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();

        loader.load(
            glbPath,
            gltf => {
                const obj = gltf.scene;

                obj.name = 'dog';
                obj.position.y = 0.3;
                obj.position.x = -0.7;
                obj.receiveShadow = receiveShadow;
                obj.castShadow = castShadow;

                const mixer = new THREE.AnimationMixer(obj);
                mixer.clipAction(gltf.animations[0]).play();

                scene.add(obj);
                mixers.push(mixer);

                obj.traverse(function (child) {
                    if (child.isMesh) {
                        child.castShadow = castShadow;
                        child.receiveShadow = receiveShadow;
                    }
                });
                resolve(obj);
            },
            undefined,
            function (error) {
                reject(error);
            }
        );
    });
}
