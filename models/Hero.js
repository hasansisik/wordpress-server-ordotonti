const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema(
  {
    activeHero: {
      type: String,
      default: "hero1"
    },
    hero1: {
      badge: {
        visible: {
          type: Boolean,
          default: true
        },
        label: {
          type: String,
          default: "yeni"
        },
        text: {
          type: String,
          default: "Free Lifetime "
        },
        link: {
          type: String,
          default: "#"
        },
        backgroundColor: {
          type: String,
          default: ""
        },
        labelBgColor: {
          type: String,
          default: "#6342EC"
        },
        labelTextColor: {
          type: String,
          default: "#FFFFFF"
        },
        textColor: {
          type: String,
          default: "#6342EC"
        },
        iconColor: {
          type: String,
          default: "#6342EC"
        }
      },
      title: {
        type: String,
        default: "Create stunning websites with our"
      },
      description: {
        type: String,
        default: "Build beautiful, responsive websites without code. Our drag-and-drop interface makes it easy to create professional sites in minutes."
      },
      primaryButton: {
        visible: {
          type: Boolean,
          default: true
        },
        text: {
          type: String,
          default: "Get Started"
        },
        link: {
          type: String,
          default: "/register"
        },
        backgroundColor: {
          type: String,
          default: ""
        },
        textColor: {
          type: String,
          default: "#FFFFFF"
        },
        iconColor: {
          type: String,
          default: "#FFFFFF"
        }
      },
      secondaryButton: {
        visible: {
          type: Boolean,
          default: true
        },
        text: {
          type: String,
          default: "Contact Sales"
        },
        link: {
          type: String,
          default: "/contact"
        },
        backgroundColor: {
          type: String,
          default: "transparent"
        },
        borderColor: {
          type: String,
          default: ""
        },
        textColor: {
          type: String,
          default: ""
        },
        iconColor: {
          type: String,
          default: "#111827"
        }
      },
      images: {
        background: {
          type: String,
          default: "/assets/imgs/hero-1/background.png"
        },
        shape1: {
          type: String,
          default: "/assets/imgs/hero-1/shape-1.png"
        },
        shape2: {
          type: String,
          default: "/assets/imgs/hero-1/shape-2.png"
        },
        shape3: {
          type: String,
          default: "/assets/imgs/hero-1/shape-3.png"
        }
      },
      card: {
        visible: {
          type: Boolean,
          default: true
        },
        image: {
          type: String,
          default: "/assets/imgs/hero-1/shape-4.png"
        },
        title: {
          type: String,
          default: "Join Our Community"
        },
        description: {
          type: String,
          default: "Over 2,500+ happy customers"
        },
        backgroundColor: {
          type: String,
          default: ""
        },
        titleColor: {
          type: String,
          default: ""
        },
        descriptionColor: {
          type: String,
          default: ""
        },
        button: {
          label: {
            type: String,
            default: "Get"
          },
          text: {
            type: String,
            default: "Free Update"
          },
          link: {
            type: String,
            default: "#"
          },
          backgroundColor: {
            type: String,
            default: "#FFFFFF"
          },
          labelBgColor: {
            type: String,
            default: "#6D4DF2"
          },
          labelTextColor: {
            type: String,
            default: "#FFFFFF"
          },
          textColor: {
            type: String,
            default: "#6D4DF2"
          },
          iconColor: {
            type: String,
            default: "#6D4DF2"
          }
        }
      }
    },
    hero2: {
      autoplay: {
        type: Boolean,
        default: true
      },
      slideDelay: {
        type: Number,
        default: 4000
      },
      showNavigation: {
        type: Boolean,
        default: true
      },
      navigationButtonColor: {
        type: String,
        default: "#ffffff"
      },
      paginationVisible: {
        type: Boolean,
        default: true
      },
      videoId: {
        type: String,
        default: "gXFATcwrO-U"
      },
      badgeBackgroundColor: {
        type: String,
        default: "rgba(255, 255, 255, 0.5)"
      },
      badgeTextColor: {
        type: String,
        default: "#6342EC"
      },
      badgeBorderColor: {
        type: String,
        default: "rgba(99, 66, 236, 0.3)"
      },
      titleColor: {
        type: String,
        default: "#111827"
      },
      descriptionColor: {
        type: String,
        default: "#4B5563"
      },
      primaryButtonBackgroundColor: {
        type: String,
        default: "linear-gradient(90deg, #6342EC 0%, #4731D8 100%)"
      },
      primaryButtonTextColor: {
        type: String,
        default: "#FFFFFF"
      },
      videoButtonBackgroundColor: {
        type: String,
        default: "rgba(255, 255, 255, 0.3)"
      },
      videoButtonTextColor: {
        type: String,
        default: "#111827"
      },
      videoButtonIconColor: {
        type: String,
        default: "#111827"
      },
      slides: {
        type: Array,
        default: [
          {
            backgroundImage: "/assets/imgs/hero-5/img-bg-1.png",
            badge: "🚀 Welcome to Infinia",
            title: "Best Solutions for Innovation",
            description: "Infinia offers full range of consultancy training methods for business consultation.",
            primaryButtonText: "View Our Services",
            primaryButtonLink: "#",
            videoButtonVisible: true,
            videoButtonText: "Video Guide",
            lineImage: "/assets/imgs/hero-5/img-bg-line.png"
          },
          {
            backgroundImage: "/assets/imgs/hero-5/img-bg-2.png",
            badge: "🚀 Welcome to Infinia",
            title: "Best Solutions for Innovation",
            description: "Infinia offers full range of consultancy training methods for business consultation.",
            primaryButtonText: "View Our Services",
            primaryButtonLink: "#",
            videoButtonVisible: true,
            videoButtonText: "Video Guide",
            lineImage: "/assets/imgs/hero-5/img-bg-line.png"
          }
        ]
      }
    },
    hero3: {
      badge: {
        visible: {
          type: Boolean,
          default: true
        },
        text: {
          type: String,
          default: "Build Without Limits"
        },
        backgroundColor: {
          type: String,
          default: "#FFFFFF"
        },
        textColor: {
          type: String,
          default: "#6342EC"
        },
        borderColor: {
          type: String,
          default: ""
        }
      },
      title: {
        part1: {
          type: String,
          default: "Create Stunning"
        },
        part2: {
          type: String,
          default: "Websites Easily"
        }
      },
      description: {
        type: String,
        default: "Design professional websites with our powerful drag-and-drop builder. No coding skills required."
      },
      button: {
        visible: {
          type: Boolean,
          default: true
        },
        text: {
          type: String,
          default: "Try It Free"
        },
        link: {
          type: String,
          default: "/register"
        },
        backgroundColor: {
          type: String,
          default: ""
        },
        textColor: {
          type: String,
          default: "#FFFFFF"
        },
        iconColor: {
          type: String,
          default: "#FFFFFF"
        }
      },
      buttons: {
        secondary: {
          visible: {
            type: Boolean,
            default: true
          },
          text: {
            type: String,
            default: "Learn More"
          },
          link: {
            type: String,
            default: "#"
          },
          backgroundColor: {
            type: String,
            default: "transparent"
          },
          borderColor: {
            type: String,
            default: ""
          },
          textColor: {
            type: String,
            default: ""
          }
        }
      },
      avatarsVisible: {
        type: Boolean,
        default: true
      },
      avatars: {
        type: Array,
        default: [
          {
            image: "/assets/imgs/hero-3/avatar-1.png",
            alt: "User avatar 1",
            visible: true,
            borderColor: "#FFFFFF",
            backgroundColor: ""
          },
          {
            image: "/assets/imgs/hero-3/avatar-2.png",
            alt: "User avatar 2",
            visible: true,
            borderColor: "#FFFFFF",
            backgroundColor: ""
          },
          {
            image: "/assets/imgs/hero-3/avatar-3.png",
            alt: "User avatar 3",
            visible: true,
            borderColor: "#FFFFFF",
            backgroundColor: ""
          }
        ]
      },
      images: {
        image1: {
          type: String,
          default: "/assets/imgs/hero-3/img-1.png"
        },
        image2: {
          type: String,
          default: "/assets/imgs/hero-3/img-2.png"
        },
        image3: {
          type: String,
          default: "/assets/imgs/hero-3/img-3.png"
        },
        image4: {
          type: String,
          default: "/assets/imgs/hero-3/img-4.png"
        },
        star: {
          type: String,
          default: "/assets/imgs/hero-3/star-rotate.png"
        }
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hero", HeroSchema); 