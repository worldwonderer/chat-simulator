import { cn } from './cn';
import ImageShim from './ImageShim';

export default function MessageBubble({ message, playerName = '我', girlName = '林晓柔', girlAvatar = '/avatar-girl.jpg' }) {
  const { sender, content, type, image } = message;

  if (sender === 'system') {
    const isTimeMessage = content.startsWith('[TIME]');
    const text = isTimeMessage ? content.replace('[TIME]', '').trim() : content;

    return isTimeMessage ? (
      <div className="flex justify-center px-4 my-[14px]">
        <span className="text-[11px] text-[#999] bg-black/[0.045] rounded-[3px] px-[10px] py-[2px]">{text}</span>
      </div>
    ) : (
      <div className="flex justify-center px-4 my-2.5">
        <span className="text-[11px] text-[#888] bg-black/[0.055] rounded-sm px-2.5 py-[3px] leading-relaxed text-center max-w-[82%]">{text}</span>
      </div>
    );
  }

  if (type === 'read') {
    return (
      <div className="flex justify-end pr-14 my-0.5">
        <span className="text-[10px] text-[#aaa]">{content}</span>
      </div>
    );
  }

  const isMine = sender === 'me';
  const imageMatch = content.match(/^\[图片：(.*?)\]$/);
  const hasImage = Boolean(image || imageMatch);
  const imageAlt = imageMatch ? imageMatch[1] : '聊天图片';

  return (
    <div className={cn('flex items-start gap-[10px] px-[14px] my-[6px] message-in', isMine ? 'flex-row-reverse' : 'flex-row')}>
      <div className="shrink-0 mt-0.5">
        <ImageShim
          src={isMine ? '/avatar-boy.jpg' : girlAvatar}
          alt={isMine ? playerName : girlName}
          width={40}
          height={40}
          className="rounded-[4px] object-cover"
        />
      </div>

      <div className={cn('flex flex-col max-w-[70%]', isMine ? 'items-end' : 'items-start')}>
        {!isMine && <span className="text-[12px] text-[#888] mb-[3px] ml-[2px]">{girlName}</span>}

        {hasImage ? (
          <div className="relative overflow-hidden rounded-[6px] border border-black/5 mt-0.5 cursor-pointer active:opacity-80 transition-opacity bg-gray-100 flex items-center justify-center min-h-[120px] min-w-[120px] max-w-[200px]">
            {image ? (
              <ImageShim src={image} alt={imageAlt} width={200} height={200} className="object-cover w-auto h-auto max-h-[250px]" unoptimized />
            ) : (
              <div className="p-4 text-center text-gray-400 text-xs flex flex-col items-center gap-2">
                <svg className="w-8 h-8 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{imageAlt}</span>
              </div>
            )}
          </div>
        ) : (
          <div
            className={cn(
              'relative px-[12px] py-[8px] rounded-[4px] text-[15px] leading-[1.55] break-words whitespace-pre-wrap',
              isMine
                ? 'bg-[#95ec69] text-[#111] bubble-right rounded-tr-[2px]'
                : 'bg-white text-[#111] bubble-left rounded-tl-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]',
            )}
          >
            {content}
          </div>
        )}
      </div>
    </div>
  );
}
