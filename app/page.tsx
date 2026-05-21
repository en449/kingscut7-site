import Nav from "@/components/Nav"
import KingsHero from "@/components/KingsHero"
import TrustStrip from "@/components/TrustStrip"
import ServicesPreview from "@/components/ServicesPreview"
import TeamSection from "@/components/TeamSection"
import GallerySection from "@/components/GallerySection"
import Reviews from "@/components/Reviews"
import BookingCTA from "@/components/BookingCTA"
import Location from "@/components/Location"
import Footer from "@/components/Footer"
import PromoPopup from "@/components/PromoPopup"

export default function Home() {
  return (
    <>
      <PromoPopup />
      <Nav />
      <main>
        <KingsHero />
        <TrustStrip />
        <ServicesPreview />
        <TeamSection />
        <GallerySection />
        <Reviews />
        <BookingCTA />
        <Location />
      </main>
      <Footer />
    </>
  )
}
