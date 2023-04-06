import { Button } from "@mantine/core";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>cat-utils</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Button onClick={() => router.push("/calculator")}>カロリー計算</Button>
        <Button onClick={() => router.push("/calculator")}>カロリー計算</Button>
        <Button onClick={() => router.push("/calculator")}>カロリー計算</Button>
      </div>
    </>
  );
}
