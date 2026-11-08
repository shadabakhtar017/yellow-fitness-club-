// Verified 14 Services of Yellow Fitness Club GYM organized into 6 strategic categories
export const SERVICE_CATEGORIES = [
  {
    id: "strength-conditioning",
    name: "Strength & Conditioning",
    tagline: "Forge power, build functional resilience, and sculpt lean muscle",
    description: "High-intensity athletic training equipped with Olympic barbells, calibrated plates, squat racks, and functional turf.",
    services: [
      {
        id: "weight-training",
        name: "Weight Training",
        category: "Strength & Conditioning",
        tagline: "Hypertrophy, biomechanical progression & raw strength",
        description: "Comprehensive progressive overload training utilizing Olympic barbells, free weights, selectorized pin-loaded stations, and plate-loaded heavy machinery tailored for all experience levels.",
        highlights: [
          "Olympic barbells, bumper plates & heavy dumbbell racks",
          "Dedicated power cages, squat racks & deadlift platforms",
          "Targeted muscle isolation & compound movement circuits",
          "Corrective form guidance from certified floor trainers"
        ],
        idealFor: "Athletes, beginners looking to build muscle tone, and advanced lifters.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
        badge: "Core Discipline"
      },
      {
        id: "crossfit",
        name: "CrossFit",
        category: "Strength & Conditioning",
        tagline: "Constantly varied, functional movements executed at high intensity",
        description: "Dynamic workouts combining Olympic weightlifting, gymnastics, plyometrics, and metabolic conditioning designed to dramatically improve power, stamina, and cardiovascular threshold.",
        highlights: [
          "Daily high-intensity WODs (Workout of the Day)",
          "Kettlebell circuits, medicine balls, battle ropes & box jumps",
          "Full-body conditioning designed for real-world resilience",
          "Scalable workouts adaptable for any physical baseline"
        ],
        idealFor: "Individuals seeking functional athleticism, endurance, and high calorie burn.",
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
        badge: "High Intensity"
      }
    ]
  },
  {
    id: "group-fitness",
    name: "Group Fitness",
    tagline: "High-energy collective motivation powered by rhythm and community",
    description: "Electrifying studio sessions driven by certified instructors and motivating playlists that turn every workout into an adrenaline rush.",
    services: [
      {
        id: "zumba",
        name: "Zumba",
        category: "Group Fitness",
        tagline: "Latin and international rhythms fused into an exhilarating party",
        description: "Dance your way to cardiovascular health with high-energy choreography set to salsa, reggaeton, cumbia, and pop rhythms. Maximize calorie burn while toning core and legs.",
        highlights: [
          "Cardiovascular conditioning through easy-to-follow dance steps",
          "Interval-style caloric burn targeting full-body toning",
          "Welcoming, judgment-free group atmosphere",
          "Boosts endorphins, coordination, and stamina"
        ],
        idealFor: "Anyone wanting a fun, social, music-driven calorie burner.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
        badge: "Popular"
      },
      {
        id: "aerobics",
        name: "Aerobics",
        category: "Group Fitness",
        tagline: "Rhythmic stepping and cardiovascular endurance conditioning",
        description: "Structured rhythmic exercise routines designed to elevate heart rate, improve oxygen capacity, and strengthen lower body muscle groups through step choreographies and aerobic drills.",
        highlights: [
          "Step platforms and rhythmic tempo training",
          "Cardiorespiratory endurance and lymphatic circulation",
          "Low-impact and high-impact exercise progressions",
          "Agility, coordination, and lower-limb stability"
        ],
        idealFor: "Cardio enthusiasts, active aging members, and stamina building.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
        badge: "Cardio Focus"
      },
      {
        id: "dance-fitness",
        name: "Dance Fitness Classes",
        category: "Group Fitness",
        tagline: "Dynamic choreography meets full-body toning",
        description: "An eclectic fusion of hip-hop, contemporary, and commercial dance workouts that challenge your rhythm while engaging deep core muscles and boosting metabolic health.",
        highlights: [
          "Choreographed routines blending dance and athletic movements",
          "Strengthens core, glutes, and postural stabilizers",
          "Upbeat, contemporary global music tracks",
          "Accessible modifications for all fitness stages"
        ],
        idealFor: "Members who love music, rhythm, and expressive movement.",
        image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=1200&q=80",
        badge: "Rhythm & Tone"
      },
      {
        id: "jazzercise",
        name: "Jazzercise",
        category: "Group Fitness",
        tagline: "The original fusion of jazz dance, resistance, and pilates",
        description: "A pulse-pounding, dance-based fitness experience that pairs jazz dance movements with resistance band training, yoga stretches, and pilates mat work for total body sculpting.",
        highlights: [
          "Fusion of dance choreography and targeted resistance work",
          "Sculpts lean muscle mass and enhances flexibility",
          "Cardio intervals combined with core strengthening",
          "Vibrant team camaraderie in a spacious studio"
        ],
        idealFor: "Fitness enthusiasts looking for full-spectrum conditioning with musical flair.",
        image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
        badge: "Classic Energy"
      }
    ]
  },
  {
    id: "personal-training",
    name: "Personal Training",
    tagline: "One-on-one tailored coaching for measurable, sustainable results",
    description: "Dedicated mentorship combining customized workout regimens, biomechanical oversight, and comprehensive nutritional advice.",
    services: [
      {
        id: "personal-training-service",
        name: "Personal Training",
        category: "Personal Training",
        tagline: "Customized programming aligned to your physiological goals",
        description: "Work directly with skilled fitness mentors who analyze your movement mechanics, body composition, and goals to build progressive training blocks with constant motivation.",
        highlights: [
          "Initial fitness assessment and movement screening",
          "Bespoke exercise architecture for fat loss, hypertrophy, or stamina",
          "Real-time postural and biomechanical corrections",
          "Accountability tracking and milestone reviews"
        ],
        idealFor: "Goal-oriented individuals, beginners needing guidance, and rehabilitating lifters.",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
        badge: "1-on-1 Coaching"
      },
      {
        id: "private-lessons",
        name: "Private Lessons",
        category: "Personal Training",
        tagline: "Focused single-discipline private sessions with coaches",
        description: "Intensive, tailored instruction in dedicated athletic disciplines including private swimming technique, Olympic lifting fundamentals, mobility masterclasses, or sports conditioning.",
        highlights: [
          "Undivided attention dedicated to a single athletic skill",
          "Rapid technique breakdown and video-assisted movement review",
          "Quiet lane or studio space reservations during session",
          "Accelerated skill acquisition tailored to your pace"
        ],
        idealFor: "Members looking to master swimming strokes, lifting form, or specific athletic skills.",
        image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
        badge: "Private Masterclass"
      },
      {
        id: "nutrition-consulting",
        name: "Nutrition Consulting",
        category: "Personal Training",
        tagline: "Evidence-guided fueling strategies to maximize your output",
        description: "Practical dietary consultations focused on macronutrient balancing, hydration protocols, metabolic adaptation, and realistic lifestyle eating habits to fuel your fitness journey.",
        highlights: [
          "Nutritional intake evaluation and lifestyle habit mapping",
          "Customized daily macronutrient and caloric recommendations",
          "Pre-workout fueling and post-workout muscle recovery guidance",
          "Sustainable meal structure without extreme deprivation"
        ],
        idealFor: "Lifters hitting plateaus, weight management clients, and performance athletes.",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
        badge: "Wellness Foundation"
      }
    ]
  },
  {
    id: "wellness-recovery",
    name: "Wellness & Recovery",
    tagline: "Restore cellular balance, soothe muscles, and cultivate mental stillness",
    description: "True fitness extends beyond heavy lifting. Thermal heat therapy and restorative mobility practices ensure complete physiological rejuvenation.",
    services: [
      {
        id: "saunas",
        name: "Saunas",
        category: "Wellness & Recovery",
        tagline: "Traditional dry heat therapy for deep muscular relaxation",
        description: "Soothe sore joints, accelerate blood circulation, and facilitate metabolic detoxification in our premium dry heat sauna chambers after strenuous workout sessions.",
        highlights: [
          "Controlled thermal environment promoting cardiovascular vasodilation",
          "Aids delayed-onset muscle soreness (DOMS) reduction",
          "Promotes mental clarity, stress reduction, and sleep quality",
          "Hygienic, impeccably maintained cedarwood facilities"
        ],
        idealFor: "Post-workout recovery, stress relief, and systemic detoxification.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        badge: "Thermal Therapy"
      },
      {
        id: "yoga-classes",
        name: "Yoga Classes",
        category: "Wellness & Recovery",
        tagline: "Breath, balance, and holistic mind-body flexibility",
        description: "Experience guided sessions combining asana postures, pranayama breathwork, and deep restorative stretching to improve joint mobility, posture, and inner tranquility.",
        highlights: [
          "Multi-level flows covering Hatha, Vinyasa, and restorative stretches",
          "Enhanced spinal decompression and hamstring/hip mobility",
          "Guided breathwork and mindfulness for mental equilibrium",
          "Calm, climate-controlled studio space"
        ],
        idealFor: "All members seeking enhanced flexibility, stress reduction, and postural balance.",
        image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
        badge: "Mind & Body"
      }
    ]
  },
  {
    id: "aquatic-fitness",
    name: "Aquatic Fitness",
    tagline: "Low-impact, high-resistance conditioning in pristine waters",
    description: "Dive into a temperature-managed swimming facility ideal for full-body cardiovascular laps, active recovery, and buoyant resistance.",
    services: [
      {
        id: "swimming",
        name: "Swimming",
        category: "Aquatic Fitness",
        tagline: "Complete zero-impact cardiovascular and muscular endurance",
        description: "Immerse yourself in our clean, crystal-clear swimming pool designed for lap swimming, endurance training, breath capacity building, and restorative non-impact workouts.",
        highlights: [
          "Clean, crystal-clear swimming pool with regulated water quality",
          "Dedicated lane swimming slots for continuous laps",
          "Zero-impact exercise protecting joints and spinal alignment",
          "Full-body engagement of back, shoulders, core, and legs"
        ],
        idealFor: "Lap swimmers, cross-training athletes, and low-impact joint recovery.",
        image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80",
        badge: "Aquatic Facility"
      }
    ]
  },
  {
    id: "youth-sports",
    name: "Youth & Sports",
    tagline: "Active athletic development for future champions and adults alike",
    description: "Structured physical education and recreational sporting programs built to instill athletic confidence, motor skills, and sportsmanship.",
    services: [
      {
        id: "adult-sports",
        name: "Adult Sports",
        category: "Youth & Sports",
        tagline: "Recreational sporting leagues, agility drills, and competitive fitness",
        description: "Keep your competitive edge alive through organized sports activities, conditioning drills, and friendly athletic challenges that foster community spirit.",
        highlights: [
          "Team-based drills, agility circuits, and competitive games",
          "Cardiovascular conditioning through engaging sports play",
          "Great way to network and build friendships with fellow members",
          "Supervised by supportive athletic facilitators"
        ],
        idealFor: "Adults wanting an active, community-driven athletic alternative to standard gym machines.",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
        badge: "Recreational Sports"
      },
      {
        id: "youth-classes",
        name: "Youth Classes",
        category: "Youth & Sports",
        tagline: "Foundational movement, coordination, and youth athletic health",
        description: "Engaging, positive physical activity sessions for kids and teenagers designed to develop motor skills, healthy postural habits, cardiovascular stamina, and confidence.",
        highlights: [
          "Age-appropriate agility drills, bodyweight exercises, and fun games",
          "Promotes positive lifelong association with fitness and movement",
          "Encourages teamwork, discipline, and physical literacy",
          "Supervised in an encouraging, safe environment"
        ],
        idealFor: "Children and teenagers developing foundational athletic skills.",
        image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=80",
        badge: "Youth Development"
      }
    ]
  }
];

// Flat list of all 14 services for quick reference and search
export const ALL_SERVICES = SERVICE_CATEGORIES.flatMap(category => category.services);

