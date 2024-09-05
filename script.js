document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = [
        {
            title: "धुंधली यादें और ज़ख्म",
            date: "2024-08-18",
            content: "मेरी यादों में हमेशा से कुछ अनकहे दृश्य बसे रहे हैं—पुणे की वे गलियाँ, जहाँ मासूम लोग एक तेज़ रफ्तार कार के नीचे कुचले गए थे। दिल्ली की सर्दियों में जब हर कोई अपने घरों में आराम कर रहा था",
            url: "https://tiwarimohit71.blogspot.com/2024/08/blog-post.html"
        },
        {
            title: "मुझे कहानियां लिखे एक अरसा हो चला हैं...",
            date: "2024-03-02",
            content: "ज़िंदगी उसकी कंडीशन पर उसके साथ नही चल रही थी। रेत को भिगोकर समुंदर लौट जाता है यादें किनारे रह जाती है और लोग लहरों में खो जाते है !",
            url: "https://tiwarimohit71.blogspot.com/2024/03/blog-post.html"
        },
        {
            title: "इतना करीब से देख रहा था वह जिंदगी को..",
            date: "2023-09-22",
            content: "वो लड़का अब शहर छोड़ने वाला था। ग्रेजुएशन के कुछ 2 महीने रह गए थे लेकिन उसके मन में अजीब सी बेचैनी थी। दिमाग स्ट्रेस से गुजर रहा था। अब तक उसने बहुत सी दुनियादारी देख ली थी। लोगों के अलग अलग रंग देख चुका था। खुद के साथ हुए छल कपट को भी याद कर रहा था।",
            url: "https://tiwarimohit71.blogspot.com/2023/09/blog-post.html"
        },
        {
            title: "हमारे एक कमरे के इस ख्वाबगाह के बाहर दुनिया इतनी मासूम नही रही।",
            date: "2023-05-05",
            content: "तुमसे दूर जाने के बाद मैने तुमसे कितनी बाते करी है। मैं सुबह जल्दी पहुंचकर ऑफिस की टेबल पे-हरदम तुमसे ही बात करता रहा हूं।",
            url: "https://tiwarimohit71.blogspot.com/2023/05/blog-post.html"
        },
        {
            title: " डियर ज़ोया...",
            date: "2023-08-11",
            content: "डियर ज़ोया क्या तुम जानती हो सबको अपनी कहानी लिखने का मौका नहीं मिला कुछ के हाथ बंधे हुए थे, तो कुछ को उनकी जिम्मेदारियों से कलम उठाने का वक्त ही नही मिला।",
            url: "https://tiwarimohit71.blogspot.com/2023/08/blog-post.html"
        },
        
        {
            title: "Seventh Blog Post",
            date: "2024-11-10",
            content: "This is a brief summary of the tenth blog post. Click below to read more.",
            url: "https://"
        }
    ];

    const blogPostsContainer = document.getElementById('blog-posts');

    blogPosts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.classList.add('blog-post');
        
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p><em>${post.date}</em></p>
            <p>${post.content}</p>
            <a href="${post.url}" target="_blank">Read more</a>
        `;
        
        blogPostsContainer.appendChild(postElement);
    });
});
