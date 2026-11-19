// تحديد نوع المصدر وبناء رابط التشغيل المناسب لأي فيديو (YouTube / Vimeo / Drive / MP4 / Embed)
function buildVideoEmbedConfig(rawSource) {
    if (!rawSource) return { type: 'none', src: '' };
    const input = rawSource.trim();

    // 1. رابط فيديو مباشر (.mp4, .webm, .ogg, .m3u8)
    if (/\.(mp4|webm|ogg|m3u8)(\?.*)?$/i.test(input)) {
        return { type: 'video', src: input };
    }

    // 2. YouTube (رابط كامل أو ID مكون من 11 حرف)
    const ytId = extractYouTubeVideoId(input);
    if (/^[a-zA-Z0-9_-]{11}$/.test(ytId)) {
        return {
            type: 'iframe',
            src: `https://www.youtube-nocookie.com/embed/${ytId}?rel=0&modestbranding=1`
        };
    }

    // 3. Vimeo
    const vimeoMatch = input.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
    if (vimeoMatch) {
        return {
            type: 'iframe',
            src: `https://player.vimeo.com/video/${vimeoMatch[1]}`
        };
    }

    // 4. Google Drive
    const driveMatch = input.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/i);
    if (driveMatch) {
        return {
            type: 'iframe',
            src: `https://drive.google.com/file/d/${driveMatch[1]}/preview`
        };
    }

    // 5. أي رابط Embed أو رابط خارجي آخر
    if (/^https?:\/\//i.test(input)) {
        return { type: 'iframe', src: input };
    }

    return { type: 'none', src: '' };
}
