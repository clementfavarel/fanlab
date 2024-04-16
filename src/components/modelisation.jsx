import React, { Suspense, useRef, useState } from "react";
import { container } from "./variables";
import { Dialog, Transition } from "@headlessui/react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { Fragment } from "react";

const Modelisation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");
  const models = [
    { name: "Aster", path: "/3D/Aster.stl" },
    { name: "Missile de croisière naval", path: "/3D/mdcn.stl" },
    { name: "Mermer40", path: "/3D/mermer40.stl" },
    {
      name: "Missile de croisière naval (Ailes déployées)",
      path: "/3D/referent_mdcn_ailes.stl",
    },
  ];

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = (model) => {
    setSelectedModel(model.path);
    setIsOpen(true);
  };

  const Model3D = ({ modelPath }) => {
    const model = useLoader(STLLoader, modelPath);
    const ref = useRef();
    useFrame(() => {
      ref.current.rotation.y += 0.01;
    });
    return (
      <mesh ref={ref} scale={[0.01, 0.01, 0.01]}>
        <primitive object={model} />
        <meshStandardMaterial color={"gray"} />
      </mesh>
    );
  };

  return (
    <section id="modelisation" className={`py-10 ${container}`}>
      <h2 className="h2-style text-center font-bold mb-20">MODÉLISATIONS 3D</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {models.map((model, index) => (
          <div
            key={index}
            className="card bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between"
          >
            <div className="font-bold text-lg mb-2">{model.name}</div>
            <div className="flex justify-between">
              <button
                onClick={() => openModal(model)}
                className="sm:text-base px-4 py-2 border border-transparent md:text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full text-center"
              >
                Voir le modèle 3D
              </button>
            </div>
          </div>
        ))}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Canvas
                    style={{
                      background: "rgba(200, 200, 200, 0.5)",
                      height: "600px",
                      borderRadius: "10px",
                    }}
                    camera={{ position: [0, 0, 4], fov: 1 }}
                  >
                    <Suspense fallback={null}>
                      <ambientLight intensity={1} />
                      <directionalLight position={[0, 0, 1]} intensity={3} />
                      <pointLight position={[0, 0, 5]} intensity={1} />
                      <Model3D modelPath={selectedModel} />
                      <OrbitControls
                        enablePan={true}
                        enableZoom={true}
                        enableRotate={true}
                      />
                    </Suspense>
                  </Canvas>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                      onClick={closeModal}
                    >
                      Fermer
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default Modelisation;
