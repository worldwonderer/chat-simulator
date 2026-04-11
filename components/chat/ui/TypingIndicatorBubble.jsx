import ImageShim from './ImageShim';

export default function TypingIndicatorBubble({ girlName = '林晓柔', girlAvatar = '/avatar-girl.jpg' }) {
  return (
    <div className="flex items-start gap-[10px] px-[14px] my-[6px] message-in">
      <ImageShim src={girlAvatar} alt={girlName} width={40} height={40} className="rounded-[4px] object-cover mt-0.5" />

      <div className="flex flex-col items-start">
        <span className="text-[12px] text-[#888] mb-[3px] ml-[2px]">{girlName}</span>
        <div className="relative bg-white rounded-[4px] rounded-tl-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.08)] px-[14px] py-[11px] bubble-left">
          <div className="flex items-center gap-[5px]">
            <span className="typing-dot w-[7px] h-[7px] bg-[#bbb] rounded-full inline-block" />
            <span className="typing-dot w-[7px] h-[7px] bg-[#bbb] rounded-full inline-block" />
            <span className="typing-dot w-[7px] h-[7px] bg-[#bbb] rounded-full inline-block" />
          </div>
        </div>
      </div>
    </div>
  );
}
