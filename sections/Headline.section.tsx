"use client";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import Text from "@/components/Text";
// "use client";
// import DiagonalLine from "@/components/DiagonalLine";
// import ParallaxImage from "@/components/ParallaxImage";
// import MainHeadlineSection from "./MainHeadline.section";

// export const MainHeadline = () => {
//   return (
//     <>
//       <div className="h-screen relative">
//         <MainHeadlineSection className="absolute z-50 mix-blend-difference">
//           We specialize in{" "}
//           <strong className="main-headline">crafting innovative </strong>
//           retail concepts that{" "}
//           <strong className="main-headline">stay ahead of the curve</strong>.
//         </MainHeadlineSection>
//         <DiagonalLine className="absolute z-40 top-0 left-0 w-screen h-screen" />

//         <ParallaxImage
//           src="/temp-images/1.jpg"
//           width={3333}
//           height={3333}
//           style={{
//             position: "absolute",
//             top: "50% ",
//             left: "33vw",
//             width: "33vw",
//             height: "33vw",
//             transform: "translate3d(-50%,-50%,0)",
//             zIndex: 10,
//             opacity: 0.2,
//           }}
//         />
//         <ParallaxImage
//           src="/temp-images/2.jpg"
//           width={2000}
//           height={330033}
//           style={{
//             position: "absolute",
//             top: "60%",
//             left: "83vw",
//             width: "20vw",
//             height: "33vw",
//             transform: "translate3d(-50%,-50%,0)",
//             opacity: 0.2,
//           }}
//         />
//         <ParallaxImage
//           src="/temp-images/3.jpg"
//           width={3333}
//           height={2000}
//           style={{
//             position: "absolute",
//             top: "1%",
//             left: "25vw",
//             width: "33vw",
//             height: "20vw",
//             transform: "translate3d(-50%,-50%,0)",
//             opacity: 0.2,
//           }}
//         />

//         {/*
//       <ParallaxImage
//         src="/temp-images/4.jpg"
//         width={2000}
//         height={2000}
//         style={{
//           position: "absolute",
//           top: "170vh",
//           left: "75vw",
//           width: "20vw",
//           height: "20vw",
//           transform: "translate3d(-50%,-50%,0)",
//         }}
//       />
//       <ParallaxImage
//         src="/temp-images/5.jpg"
//         width={2000}
//         height={2000}
//         style={{
//           position: "absolute",
//           top: "225vh",
//           left: "60vw",
//           width: "20vw",
//           height: "20vw",
//           transform: "translate3d(-50%,-50%,0)",
//         }}
//       />
//       <ParallaxImage
//         src="/temp-images/6.jpg"
//         width={3333}
//         height={3333}
//         style={{
//           position: "absolute",
//           top: "250vh",
//           left: "25vw",
//           width: "33vw",
//           height: "33vw",
//           transform: "translate3d(-50%,-50%,0)",
//         }}
//       />
//       <ParallaxImage
//         src="/temp-images/7.jpg"
//         width={3333}
//         height={2000}
//         style={{
//           position: "absolute",
//           top: "310vh",
//           left: "25vw",
//           width: "33vw",
//           height: "20vw",
//           transform: "translate3d(-50%,-50%,0)",
//         }}
//       />
//       <ParallaxImage
//         src="/temp-images/8.jpg"
//         width={5000}
//         height={5000}
//         style={{
//           position: "absolute",
//           top: "360vh",
//           left: "75vw",
//           width: "50vw",
//           height: "50vw",
//           transform: "translate3d(-50%,-50%,0)",
//         }}
//       />
//       <ParallaxImage
//         src="/temp-images/12.jpg"
//         width={4000}
//         height={5000}
//         style={{
//           position: "absolute",
//           top: "460vh",
//           left: "33vw",
//           width: "40vw",
//           height: "50vw",
//           transform: "translate3d(-50%,-50%,0)",
//         }}
//       /> */}
//       </div>
//     </>
//   );
// };

export function MainHeadline() {
  return (
    <Container as="section" className="h-screen flex items-center">
      <FadeIn>
        <Text animate className="text-5xl text-caramel-100">
          Retail fit out contractor retail experts for luxury lifestyle brands
          We specialize in crafting innovative retail concepts that stay ahead
          of the curve.
        </Text>
      </FadeIn>
    </Container>
  );
}
