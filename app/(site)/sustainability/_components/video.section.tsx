"use client";
import SchemaCard from "@/components/SchemaCard/SchemaCard";
import React from "react";
import ReactPlayer from "react-player";

export default function VideoSection() {
  return (
    <SchemaCard
      maxWidth={false}
      padding={false}
      className="w-full aspect-video"
    >
      <ReactPlayer
        url="https://www.youtube.com/watch?v=wQn56hJ7DWk"
        width={"100%"}
        height={"100%"}
        playing
        loop
        muted
        controls={false}
        style={{ pointerEvents: "none" }}
        stopOnUnmount
        // onReady={readyToPlay}
        config={{
          youtube: {
            playerVars: {
              showinfo: 0,
            },
          },
        }}
      />
    </SchemaCard>
  );
}
