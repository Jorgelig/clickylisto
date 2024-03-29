import React, { useState } from "react";
import { useRouter } from "next/navigation";
import upperTolow from "@assets/images/upperTolow.jpg";
import qrTool from "@assets/images/QrTool.jpg";
import { CardMain } from "@/components/CardMain";
import Link from "next/link";

export default function Home() {
  // const router = useRouter();

  return (
    <main className="container mt-10 flex flex-col items-center gap-3 text-center">
      <div className="mb-8">
        <h1 className="mb-1 font-mono text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Click y Listo
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          <span className="font-bold">Herramientas prácticas al alcance de un clic</span> .
        </p>
      </div>
      <section className="flex-wrap gap-4 md:flex lg:flex xl:flex">
        <Link href={"/texttools"} prefetch>
          <CardMain
            imageCard={upperTolow}
            titleText="Mayúsculas a minúsculas"
            subtitleText="Convierte tu texto"
            // onClick={() => router.push("./texttools")}
          />
        </Link>
        <Link href={"/qrtools"} prefetch>
          <CardMain
            imageCard={qrTool}
            titleText="Generador de Códigos QR"
            subtitleText="QR en segundos"
            // onClick={() => router.push("./qrtools")}
          />
        </Link>

        {/* <CardMain
          imageCard={upperTolow}
          titleText="Enlace a Whatsaap"
          subtitleText="Convierte tu texto"
          onClick={() => router.push("./linktows")}
        />
        <CardMain
          imageCard={upperTolow}
          titleText="Acortador de Enlaces"
          subtitleText="Convierte tu texto"
          onClick={() => router.push("./shortlink")}
        /> */}
      </section>
    </main>
  );
}
