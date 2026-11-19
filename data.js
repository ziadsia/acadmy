const DEFAULT_COURSES = [
    {
        id: 1,
        title: "كورس الفيزياء - الصف الثالث الثانوي",
        description: "شرح المنهج كاملاً مقسم إلى وحدات وقوائم تشغيل منظمة.",
        isFree: false
    },
    {
        id: 2,
        title: "كورس التأسيس المجاني",
        description: "كورس مجاني شامل لكل الطلاب.",
        isFree: true
    }
];

const DEFAULT_PLAYLISTS = [
    {
        id: 1,
        courseId: 1,
        title: "الباب الأول: التيار الكهربي وقانون أوم",
        description: "شرح دروس الباب الأول كاملة مع حل مسائل كتاب الامتحان"
    },
    {
        id: 2,
        courseId: 1,
        title: "الباب الثاني: التأثير المغناطيسي للتيار",
        description: "شرح الفصل الثاني بالتفصيل"
    },
    {
        id: 3,
        courseId: 2,
        title: "أساسيات الرياضة والفيزياء",
        description: "مراجعة القوانين الأساسية قبل المنهج"
    }
];

const DEFAULT_LESSONS = [
    {
        id: 1,
        playlistId: 1,
        title: "الدرس الأول: شدة التيار وفرق الجهد (حصة مجانية)",
        description: "مقدمة الباب الأول متاحة مجاناً للجميع",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        isFreePreview: true,
        requiredQuizId: null
    },
    {
        id: 2,
        playlistId: 1,
        title: "الدرس الثاني: المقاومة الكهربية وقانون أوم",
        description: "يتطلب تفعيل الكورس + اجتياز امتحان الدرس الأول",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        isFreePreview: false,
        requiredQuizId: 101
    },
    {
        id: 3,
        playlistId: 3,
        title: "المحاضرة التأسيسية الأولى",
        description: "التحويلات والوحدات الأساسية",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        isFreePreview: true,
        requiredQuizId: null
    }
];

const DEFAULT_QUIZZES = [
    {
        id: 101,
        title: "امتحان تقييم الدرس الأول",
        passScore: 50,
        questions: [
            { q: "وحدة قياس شدة التيار الكهربي هي:", options: ["الأمبير", "الفولت", "الأوم", "الوات"], answer: 0 }
        ]
    }
];

const DEFAULT_CODES = [
    { code: "PHY-2026", unlocksCourses: [1], label: "كورس الفيزياء - الصف الثالث الثانوي", used: false, usedBy: null }
];
