import ImageShim from './ImageShim';
import { ChevronLeftIcon, PhoneIcon, EllipsisIcon } from './icons';

export default function ConversationHeader({ name, avatar = '/avatar-girl.jpg', isTyping = false }) {
  return (
    <div className="wechat-header flex items-center h-[48px] px-2 shrink-0 relative select-none">
      <button className="flex items-center text-white/90 active:text-white/50 transition-colors z-10 pr-2">
        <ChevronLeftIcon size={26} strokeWidth={2.2} className="-ml-0.5" />
        <span className="text-[15px] font-normal -ml-1" />
      </button>

      <div className="absolute inset-0 flex items-center justify-center gap-[7px] pointer-events-none">
        <div className="relative shrink-0">
          <ImageShim src={avatar} alt={name} width={32} height={32} className="rounded-[5px] object-cover" />
          <span className="absolute -bottom-0.5 -right-0.5 w-[9px] h-[9px] bg-[#4cd964] rounded-full border-[1.5px] border-[#3f7d50]" />
        </div>

        <div className="flex flex-col items-start">
          <span className="text-white text-[16px] font-semibold leading-tight tracking-wide">{name}</span>
          <span className={`text-[11px] leading-tight transition-all ${isTyping ? 'text-[#a8e6bc]' : 'text-white/45'}`}>
            {isTyping ? '正在输入…' : '在线'}
          </span>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-[18px] text-white/85 z-10 pl-2">
        <button className="active:text-white/40 transition-colors">
          <PhoneIcon size={19} strokeWidth={1.8} />
        </button>
        <button className="active:text-white/40 transition-colors">
          <EllipsisIcon size={21} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
