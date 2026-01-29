import React, { useEffect, useRef, useContext, useState } from "react";
import { Pose } from "@mediapipe/pose";
import { Camera } from "@mediapipe/camera_utils";
import * as drawing from "@mediapipe/drawing_utils";
import { ClosetContext } from "../context/ClosetContext";

export default function TryOn() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const { closet } = useContext(ClosetContext);

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const canvasElement = canvasRef.current;
    const ctx = canvasElement.getContext("2d");

    const pose = new Pose({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
    });

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: false,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    pose.onResults((results) => {
      ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

      if (!results.poseLandmarks) return;

      // Draw pose skeleton
      drawing.drawConnectors(
        ctx,
        results.poseLandmarks,
        Pose.POSE_CONNECTIONS,
        { color: "cyan", lineWidth: 3 }
      );

      drawing.drawLandmarks(ctx, results.poseLandmarks, {
        color: "red",
        radius: 4,
      });

      // If an item is selected, draw clothing overlay
      if (selectedItem) {
        const lm = results.poseLandmarks;

        const leftShoulder = lm[11];
        const rightShoulder = lm[12];
        const leftHip = lm[23];

        const shoulderX =
          ((leftShoulder.x + rightShoulder.x) / 2) * canvasElement.width;
        const shoulderY =
          ((leftShoulder.y + rightShoulder.y) / 2) *
          canvasElement.height;

        const width =
          Math.abs(leftShoulder.x - rightShoulder.x) *
          canvasElement.width *
          2;

        const height =
          Math.abs(leftShoulder.y - leftHip.y) *
          canvasElement.height *
          1.3;

        const img = new Image();
        img.src = selectedItem.image;

        img.onload = () => {
          ctx.drawImage(
            img,
            shoulderX - width / 2,
            shoulderY,
            width,
            height
          );
        };
      }
    });

    const camera = new Camera(videoElement, {
      onFrame: async () => {
        await pose.send({ image: videoElement });
      },
      width: 640,
      height: 480,
    });

    camera.start();
  }, [selectedItem]);

  return (
    <div
      className="min-h-screen flex flex-col items-center p-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/backgrounds/tryoonback.jpeg')",
      }}
    >
      <h1 className="text-3xl font-bold mb-6 text-black drop-shadow-lg">
        Virtual Clothing Try-On
      </h1>

      <div className="relative">
        <video
          ref={videoRef}
          width="640"
          height="480"
          autoPlay
          playsInline
          className="rounded-lg shadow-xl"
        ></video>

        <canvas
          ref={canvasRef}
          width="640"
          height="480"
          className="absolute top-0 left-0"
        ></canvas>
      </div>

      {/* Closet Items */}
      <h2 className="text-2xl font-semibold text-black mt-8 mb-3">
        Your Closet Items
      </h2>

      <div className="flex gap-4 overflow-x-auto p-4 bg-white/70 rounded-lg shadow-lg max-w-[90vw]">
        {closet.length === 0 && (
          <p className="text-gray-700">No items added yet.</p>
        )}

        {closet.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-lg border cursor-pointer hover:scale-110 transition"
              onClick={() => setSelectedItem(item)}
            />
            <p className="text-sm mt-1 font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}