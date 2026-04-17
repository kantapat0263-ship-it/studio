import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Separator } from "@/components/ui/separator";

export function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-image');

  return (
    <section id="about" className="w-full bg-card py-16 md:py-24">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-6">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-accent sm:text-4xl md:text-5xl">
            About Us
          </h2>
          <p className="text-muted-foreground md:text-lg">
            ก่อตั้งขึ้นเมื่อวันที่ 3 มิถุนายน พ.ศ. 2539 ด้วยทุนจดทะเบียน 10 ล้านบาท เราให้บริการด้านการออกแบบ (Design), บริหารจัดการ (Management), จัดหา (Providing) และติดตั้งระบบวิศวกรรมต่างๆ (Installation) อย่างครบวงจร
          </p>
          <Separator className="bg-border/50" />
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground">Our Team</h3>
              <p className="text-muted-foreground">
                ปัจจุบันมีทีมงานและผู้เชี่ยวชาญรวมทั้งสิ้น 110 คน ประกอบด้วยวิศวกรไฟฟ้า วิศวกรเครื่องกล โฟร์แมน ฝ่ายเขียนแบบ และฝ่ายสนับสนุนอื่นๆ เพื่อส่งมอบงานที่มีคุณภาพสูงสุด
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-2xl md:h-[450px]">
          {aboutImage && (
             <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
          )}
           <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
