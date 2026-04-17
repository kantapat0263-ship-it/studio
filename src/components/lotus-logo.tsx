import Image from 'next/image';
import { cn } from '@/lib/utils';

export function LotusLogo({ className, width, height, priority }: { className?: string, width?: number, height?: number, priority?: boolean }) {
  return (
    <Image
        src="https://img2.pic.in.th/LOTUS-EME.png"
        alt="Lotus Electrical Mechanical Engineering Co.,Ltd. Logo"
        width={width || 192}
        height={height || 144}
        className={cn("object-contain", className)}
        priority={priority}
    />
  );
}
