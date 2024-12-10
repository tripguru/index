document.addEventListener('click', function (event) {
    const target = event.target;

    // 检查是否是 <a> 标签，并且有 href 属性
    if (target.tagName === 'A' && target.hasAttribute('href')) {
        const href = target.getAttribute('href');

        // 检查链接是否是外部链接
        if (href.startsWith('http') && !href.includes(window.location.hostname)) {
            event.preventDefault();
            alert('外部链接已被禁用！');
        }
    }
});
