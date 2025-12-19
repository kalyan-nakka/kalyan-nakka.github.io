// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Summary of my education, experience, accolades and others.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-status-started-as-a-ms-student-at-eecs-tamuk",
          title: '[STATUS]   Started as a MS student at EECS @ TAMUK.',
          description: "",
          section: "News",},{id: "news-honor-received-the-rockwell-international-scholarship-and-computer-science-graduate-scholarship-from-eecs-tamuk-many-thanks-for-the-support",
          title: '[HONOR] Received the Rockwell International Scholarship and Computer Science Graduate Scholarship from EECS...',
          description: "",
          section: "News",},{id: "news-honor-received-the-dean-39-s-merit-scholarship-from-college-of-engineering-tamuk-many-thanks-for-the-support",
          title: '[HONOR] Received the Dean&amp;#39;s Merit Scholarship from College of Engineering @ TAMUK. Many...',
          description: "",
          section: "News",},{id: "news-status-successfully-defended-my-ms-thesis-slides-at-tamuk-advised-by-dr-habib-m-ammari-in-the-wiseman-research-lab",
          title: '[STATUS] Successfully defended my MS Thesis (slides) at TAMUK, advised by Dr. Habib...',
          description: "",
          section: "News",},{id: "news-presentation-presented-virtually-our-work-on-pqc-grade-ieee-2030-5-network-for-ders-at-sunspec-alliance-annual-meeting-2022",
          title: '[PRESENTATION] Presented (virtually) our work on PQC-grade IEEE 2030.5 network for DERs, at...',
          description: "",
          section: "News",},{id: "news-presentation-presented-our-work-developing-k-csqu-a-connected-k-coverage-protocol-for-2d-wsns-at-texas-a-amp-amp-m-graduate-science-and-engineering-research-colloquium-2023",
          title: '[PRESENTATION] Presented our work developing k-CSqu, a connected k-coverage protocol for 2D-WSNs, at...',
          description: "",
          section: "News",},{id: "news-award-received-the-distinguished-student-award-from-college-of-graduate-studies-tamuk-many-thanks-for-the-acknowledgment",
          title: '[AWARD] Received the Distinguished Student Award from College of Graduate Studies @ TAMUK....',
          description: "",
          section: "News",},{id: "news-status-i-received-my-m-s-degree-from-eecs-tamuk-i-deeply-appreciate-all-the-support-and-help-from-my-family-advisor-collaborators-and-friends",
          title: '[STATUS] I received my M.S. degree from EECS @ TAMUK. I deeply appreciate...',
          description: "",
          section: "News",},{id: "news-paper-our-paper-on-st-k-csqu-a-stochastic-connected-k-coverage-protocol-for-2d-wsns-is-accepted-in-ieee-iscc-2023-conference",
          title: '[PAPER] Our paper on St-k-CSqu, a stochastic connected k-coverage protocol for 2D-WSNs, is...',
          description: "",
          section: "News",},{id: "news-paper-our-paper-on-k-csqu-is-accepted-in-jpdc-journal",
          title: '[PAPER]   Our paper on k-CSqu is accepted in JPDC journal.',
          description: "",
          section: "News",},{id: "news-paper-our-paper-on-pqc-grade-ieee-2030-5-network-for-ders-is-accepted-in-ieee-isgt-2024-conference",
          title: '[PAPER] Our paper on PQC-grade IEEE 2030.5 network for DERs, is accepted in...',
          description: "",
          section: "News",},{id: "news-paper-our-paper-on-k-indi-a-connected-k-coverage-protocol-for-2d-wsns-is-accepted-in-adhoc-networks-journal",
          title: '[PAPER] Our paper on k-InDi, a connected k-coverage protocol for 2D-WSNs, is accepted...',
          description: "",
          section: "News",},{id: "news-status-started-as-a-ph-d-student-at-cse-tamu-advised-by-dr-nitesh-saxena-in-the-spies-research-lab",
          title: '[STATUS] Started as a Ph.D. student at CSE @ TAMU, advised by Dr....',
          description: "",
          section: "News",},{id: "news-paper-our-paper-on-blockchain-based-security-platform-for-solar-farms-led-by-bohyun-ahn-is-accepted-in-ieee-ecce-2024-conference",
          title: '[PAPER] Our paper on blockchain-based security platform for solar farms, led by Bohyun...',
          description: "",
          section: "News",},{id: "news-presentation-presented-our-on-device-slms-study-for-understanding-their-trust-and-ethics-gap-at-texas-a-amp-amp-m-global-cyber-research-institute-annual-summit-2024",
          title: '[PRESENTATION] Presented our On-Device SLMs study, for understanding their trust and ethics gap,...',
          description: "",
          section: "News",},{id: "news-paper-our-paper-on-blockchain-assisted-resilient-control-platform-for-ders-led-by-seerin-ahmad-is-accepted-in-ieee-access-journal",
          title: '[PAPER] Our paper on blockchain-assisted resilient control platform for DERs, led by Seerin...',
          description: "",
          section: "News",},{id: "news-paper-our-paper-on-het-k-csqu-a-heterogeneous-connected-k-coverage-protocol-for-2d-wsns-is-accepted-in-acm-tosn-journal",
          title: '[PAPER] Our paper on Het-k-CSqu, a heterogeneous connected k-coverage protocol for 2D-WSNs, is...',
          description: "",
          section: "News",},{id: "news-presentation-presented-our-on-device-slms-study-at-texas-a-amp-amp-m-initiative-for-connected-intelligence-2025-workshop",
          title: '[PRESENTATION] Presented our On-Device SLMs study at Texas A&amp;amp;amp;M Initiative for Connected Intelligence...',
          description: "",
          section: "News",},{id: "news-paper-our-paper-on-ml-framework-for-assessing-cryptographic-indistinguishability-led-by-jimmy-dani-is-accepted-in-pst-2025-conference",
          title: '[PAPER] Our paper on ML framework for assessing cryptographic indistinguishability, led by Jimmy...',
          description: "",
          section: "News",},{id: "news-paper-our-paper-on-st-k-indi-a-stochastic-connected-k-coverage-protocol-for-2d-wsns-is-accepted-in-stwimob-workshop-ieee-wimob-2025-conference",
          title: '[PAPER] Our paper on St-k-InDi, a stochastic connected k-coverage protocol for 2D-WSNs, is...',
          description: "",
          section: "News",},{id: "news-presentation-presented-our-work-on-developing-litelmguard-an-on-device-guardrails-for-slms-at-texas-a-amp-amp-m-global-cyber-research-institute-annual-summit-2025",
          title: '[PRESENTATION] Presented our work on developing LiteLMGuard, an On-Device Guardrails for SLMs, at...',
          description: "",
          section: "News",},{id: "news-paper-our-paper-on-litelmguard-is-accepted-in-ijcnlp-aacl-2025-conference",
          title: '[PAPER]   Our paper on LiteLMGuard is accepted in IJCNLP-AACL 2025 conference.',
          description: "",
          section: "News",},{id: "news-paper-our-paper-on-blockchain-based-security-platform-for-solar-farms-led-by-bohyun-ahn-is-accepted-in-ieee-tia-journal",
          title: '[PAPER] Our paper on blockchain-based security platform for solar farms, led by Bohyun...',
          description: "",
          section: "News",},{id: "news-media-our-on-device-slms-study-is-cited-in-a-south-korean-news-article-covering-a-major-incident-related-to-ai-security-breach-check-the-original-news-article-here",
          title: '[MEDIA] Our On-Device SLMs study is cited in a South Korean news article,...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/VSKalyan_Nakka_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%61%6C%79%61%6E@%74%61%6D%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kalyan-nakka", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kalyan-nakka", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=vrwOwf4AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
