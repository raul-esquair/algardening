export interface CityData {
  slug: string;
  name: string;
  county: "Contra Costa" | "Alameda";
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  description: string;
  localChallenges: string;
  neighborhoods: string[];
  landmarks: string[];
  nearbyCitySlugs: string[];
  faqs: { question: string; answer: string }[];
  testimonial: {
    quote: string;
    name: string;
    neighborhood: string;
  };
}

export const cities: CityData[] = [
  // ─── CONTRA COSTA COUNTY ───────────────────────────────────────────
  {
    slug: "walnut-creek",
    name: "Walnut Creek",
    county: "Contra Costa",
    metaTitle: "Landscaping in Walnut Creek, CA",
    metaDescription:
      "Professional lawn care, landscape design, and tree services in Walnut Creek. From Rossmoor to Northgate — licensed, insured, and satisfaction guaranteed.",
    headline: "Professional Landscaping in Walnut Creek",
    subheadline:
      "From the manicured communities of Rossmoor to the family neighborhoods of Northgate, we keep Walnut Creek properties looking their best year-round.",
    description:
      "Walnut Creek sits at the heart of central Contra Costa County where the warm, dry summers regularly push past 90°F and the clay-heavy valley soil challenges even experienced gardeners. Most properties here were built between the 1960s and 1990s, meaning mature trees, aging irrigation systems, and landscapes that benefit from periodic renovation. Whether you own a single-story ranch in Saranap, a hillside home near Lime Ridge Open Space, or a unit inside Rossmoor's gated 55-plus community, AL Gardening understands the specific demands of this area. We work with EBMUD watering guidelines and tailor every maintenance plan to Walnut Creek's USDA Zone 9b–10a climate, so your lawn stays green without wasting water.",
    localChallenges:
      "The heavy clay soil throughout Walnut Creek's valley floor retains moisture in winter but bakes rock-hard in summer, making proper aeration and soil amendment essential for healthy turf. Many Northgate and Larkey Park properties sit on gentle slopes where drainage issues compound the clay problem — water pools in low spots and runs off hardpan areas. Rossmoor residents face additional challenges: the HOA's Architectural Review Committee enforces strict landscaping standards, and the community's recycled-water irrigation system requires drought-tolerant plant selections. Properties bordering Lime Ridge and Shell Ridge Open Space deal with deer browsing, wild oat encroachment, and fire-safe vegetation management in designated high-hazard zones.",
    neighborhoods: [
      "Rossmoor",
      "Northgate",
      "Saranap",
      "Larkey Park",
      "Lakewood",
    ],
    landmarks: [
      "Heather Farm Park",
      "Lime Ridge Open Space",
      "Broadway Plaza",
    ],
    nearbyCitySlugs: ["pleasant-hill", "lafayette", "concord"],
    faqs: [
      {
        question:
          "Do you work within Rossmoor's landscaping guidelines?",
        answer:
          "Yes. We're familiar with Rossmoor's Architectural Review Committee requirements and their recycled-water irrigation system. We coordinate with the community's landscaping standards to ensure any changes we make comply with HOA rules.",
      },
      {
        question:
          "How do you handle the heavy clay soil in Walnut Creek?",
        answer:
          "We start with core aeration to break up compacted clay, then top-dress with organic compost to improve drainage and root penetration. For new plantings, we amend individual beds with a clay-busting mix of compost and gypsum that works well in Walnut Creek's valley soil.",
      },
      {
        question:
          "What watering schedule do you recommend for Walnut Creek lawns?",
        answer:
          "Walnut Creek is served by EBMUD, which sets seasonal watering schedules. During summer months we typically recommend deep watering 2–3 times per week in early morning, adjusted based on your specific microclimate and sun exposure. We can also upgrade your irrigation controller to a smart system that adjusts automatically.",
      },
      {
        question: "Do you service properties near the open space areas?",
        answer:
          "Absolutely. We regularly maintain properties bordering Lime Ridge and Shell Ridge Open Space. These homes often need fire-safe landscaping, deer-resistant plantings, and management of wild grasses that encroach from the open space.",
      },
    ],
    testimonial: {
      quote:
        "They completely transformed our backyard in Northgate. The clay soil was a nightmare before — now we have a lawn the kids actually play on. They even fixed our drainage problem.",
      name: "Sarah M.",
      neighborhood: "Northgate, Walnut Creek",
    },
  },
  {
    slug: "concord",
    name: "Concord",
    county: "Contra Costa",
    metaTitle: "Landscaping Services in Concord, CA",
    metaDescription:
      "Lawn care, landscape design, and tree services in Concord, CA. Serving Dana Estates, Crystyl Ranch, and all Concord neighborhoods. Free estimates.",
    headline: "Trusted Landscaping Services in Concord",
    subheadline:
      "From established neighborhoods near Todos Santos Plaza to the newer homes of Crystyl Ranch — reliable lawn care and landscaping for every Concord property.",
    description:
      "Concord is the largest city in central Contra Costa County, and its neighborhoods range from charming mid-century bungalows near downtown's Todos Santos Plaza to the spacious executive homes of Crystyl Ranch on the city's southern edge. Summers here are among the hottest in the inner East Bay, with temperatures frequently topping 95°F from June through September. Most of Concord sits in USDA Zone 9b–10a, and the heavy clay soil that dominates the valley floor demands smart watering and regular aeration. Concord is served by Contra Costa Water District (CCWD) in most areas, with EBMUD covering the western portions. AL Gardening works with both districts' conservation guidelines to keep your property healthy and compliant.",
    localChallenges:
      "Concord's intense summer heat and heavy clay soil are the two biggest landscaping challenges. Lawns stress quickly during July and August heat waves, making proper irrigation timing critical — early-morning watering before 8 AM is essential to reduce evaporation. The clay soil in neighborhoods like Dana Estates and Ellis Lake compacts easily under foot traffic, suffocating roots and creating hard, cracked surfaces by late summer. Older homes near downtown often have aging irrigation systems that waste water, and many properties need a complete sprinkler audit to bring them up to current CCWD efficiency standards. Concord's yard waste is handled by Mt. Diablo Resource Recovery, which provides green waste carts with year-round weekly pickup — a real advantage for seasonal cleanups.",
    neighborhoods: [
      "Crystyl Ranch",
      "Dana Estates",
      "Ellis Lake",
      "Lime Ridge",
      "Todos Santos",
    ],
    landmarks: [
      "Todos Santos Plaza",
      "Mt. Diablo Resource Recovery",
      "Lime Ridge Open Space",
    ],
    nearbyCitySlugs: ["pleasant-hill", "walnut-creek", "clayton"],
    faqs: [
      {
        question:
          "Which water district serves my Concord property?",
        answer:
          "Most of Concord is served by Contra Costa Water District (CCWD), but properties in western Concord near the Walnut Creek border may be on EBMUD. We work with both districts and can help you identify which one serves your address.",
      },
      {
        question:
          "How do you keep lawns green in Concord's extreme summer heat?",
        answer:
          "We adjust mowing height to 3–3.5 inches during peak summer to shade the soil, schedule irrigation for early morning, and apply a summer fertilizer blend suited to the heat. Deep, infrequent watering trains roots to go deeper where the clay soil stays cooler.",
      },
      {
        question: "Do you handle yard waste removal in Concord?",
        answer:
          "Concord's green waste is picked up weekly by Mt. Diablo Resource Recovery. For regular maintenance visits, we leave clippings and debris in your green cart. For larger cleanups and haul-away jobs, we handle disposal directly so you don't have to worry about overflow.",
      },
      {
        question:
          "Can you renovate the landscaping on older Concord properties?",
        answer:
          "That's one of our specialties. Many homes near downtown Concord have landscapes from the 1960s–70s that are ready for an update. We can redesign with drought-tolerant plants, upgrade irrigation, and refresh tired lawns — all while respecting the character of the original property.",
      },
    ],
    testimonial: {
      quote:
        "Our front yard in Dana Estates was mostly dead patches and weeds. AL Gardening brought it back to life — even the neighbors started asking who we hired. Great crew, always on time.",
      name: "David R.",
      neighborhood: "Dana Estates, Concord",
    },
  },
  {
    slug: "pleasant-hill",
    name: "Pleasant Hill",
    county: "Contra Costa",
    metaTitle: "Landscaping in Pleasant Hill, CA",
    metaDescription:
      "Professional landscaping and lawn care in Pleasant Hill, CA. Serving Contra Costa Centre, Gregory Gardens, and all Pleasant Hill areas. Licensed & insured.",
    headline: "Quality Landscaping in Pleasant Hill",
    subheadline:
      "Dependable lawn maintenance, landscape design, and tree care for Pleasant Hill homes — from Gregory Gardens to Contra Costa Centre and everywhere in between.",
    description:
      "Pleasant Hill is a mid-county community known for its tree-lined residential streets, strong neighborhood identity, and central location along Contra Costa Boulevard. Most homes were built in the 1950s through 1970s, giving the area a mature, established feel with large shade trees, older irrigation systems, and landscapes that benefit from thoughtful updates. The city sits in USDA Zone 9b–10a and receives water from a mix of providers — CCWD in most areas, EBMUD in the southwest, and some properties near the Martinez border on Martinez Water District. Pleasant Hill's Maintenance Division uses only recycled water on public medians and landscaping, reflecting the community's focus on water conservation.",
    localChallenges:
      "Pleasant Hill's geography creates noticeable wind corridors, especially along the Contra Costa Boulevard corridor and near the BART station, which increases evapotranspiration and dries out lawns faster than in sheltered neighboring cities. The heavy clay soil here is consistent with the rest of central Contra Costa — compacted and slow-draining in winter, cracked and hard in summer. Many Gregory Gardens and Grayson Creek properties from the 1950s–60s have root-bound trees that buckle sidewalks and invade sewer lines, making tree root management a common service call. The city partners with Constable Sanitation for yard waste pickup, offering unlimited green waste year-round — which makes seasonal cleanup projects especially practical.",
    neighborhoods: [
      "Gregory Gardens",
      "Contra Costa Centre",
      "Grayson Creek",
      "Pleasant Oaks",
      "Poets Corner",
    ],
    landmarks: [
      "Pleasant Hill BART",
      "Paso Nogal Park",
      "Pleasant Hill Community Center",
    ],
    nearbyCitySlugs: ["walnut-creek", "concord", "martinez"],
    faqs: [
      {
        question:
          "My yard dries out faster than my neighbors' in Walnut Creek. Why?",
        answer:
          "Pleasant Hill has notable wind corridors, especially in the central and eastern parts of the city, that increase evaporation rates. We compensate by adjusting irrigation schedules, adding mulch to retain moisture, and recommending wind-tolerant plant varieties.",
      },
      {
        question:
          "Can you deal with the tree roots that are cracking my sidewalk?",
        answer:
          "Root management is one of our most common requests in Pleasant Hill, especially in Gregory Gardens where mature trees are outgrowing their original spaces. We offer root pruning, barrier installation, and can coordinate with the city on sidewalk repair if needed.",
      },
      {
        question:
          "What water district am I on in Pleasant Hill?",
        answer:
          "Pleasant Hill is split between Contra Costa Water District (most of the city), EBMUD (southwest portions), and Martinez Water District (near the northern border). We work with all three and can adjust your irrigation plan based on whichever district's rules apply.",
      },
    ],
    testimonial: {
      quote:
        "We've used AL Gardening for two years now. They're the only crew that actually understood our wind problem — our lawn used to dry out in two days. Now it stays green all week.",
      name: "Jennifer L.",
      neighborhood: "Gregory Gardens, Pleasant Hill",
    },
  },
  {
    slug: "martinez",
    name: "Martinez",
    county: "Contra Costa",
    metaTitle: "Landscaping Services in Martinez, CA",
    metaDescription:
      "Lawn care, landscape design, and tree services in Martinez, CA. Serving Alhambra Valley, Vine Hill, and downtown Martinez. Free estimates available.",
    headline: "Landscaping Services in Martinez",
    subheadline:
      "From the ranch estates of Alhambra Valley to the Craftsman bungalows of downtown — professional landscaping care tailored to Martinez's diverse properties.",
    description:
      "Martinez is the Contra Costa County seat, a city with genuine character where 1930s Craftsman bungalows near downtown sit just miles from sprawling ranch properties in Alhambra Valley. The city's waterfront location along the Carquinez Strait gives it a cooler, breezier microclimate than inland neighbors like Concord and Walnut Creek — summer highs typically stay 5–10 degrees cooler thanks to Delta breezes that funnel through the strait. Most of Martinez is served by the Martinez Water District, though some hillside areas fall under EBMUD. The varied terrain — from flat downtown lots to rolling hillside acreage — means no two Martinez properties need the same landscaping approach.",
    localChallenges:
      "Martinez's hillside neighborhoods like Alhambra Valley and Hidden Valley deal with erosion on sloped lots, especially during winter rains when the clay soil becomes saturated and slides. Properties backing up to Briones Regional Park and the John Muir National Historic Site face heavy deer pressure, wild grass encroachment, and fire-safe landscaping requirements in certain zones. Downtown lots are often compact with mature trees that need careful pruning to preserve the neighborhood's historic canopy. Vine Hill properties sit on expansive clay that shifts seasonally, meaning irrigation and grading need to account for soil movement. The city's marina-adjacent neighborhoods experience salt-laden Delta breezes that can stress certain ornamental plants.",
    neighborhoods: [
      "Alhambra Valley",
      "Vine Hill",
      "Hidden Valley",
      "Downtown Martinez",
      "Virginia Hills",
    ],
    landmarks: [
      "John Muir National Historic Site",
      "Martinez Marina",
      "Briones Regional Park",
    ],
    nearbyCitySlugs: ["pleasant-hill", "concord"],
    faqs: [
      {
        question:
          "Do deer damage landscaping in Martinez?",
        answer:
          "Yes — properties near Briones Regional Park and Alhambra Valley see regular deer browsing. We design landscapes with deer-resistant plants like lavender, rosemary, and native sages, and can install temporary fencing to protect new plantings until they're established.",
      },
      {
        question:
          "Is Martinez cooler than the rest of Contra Costa?",
        answer:
          "Noticeably. Delta breezes through the Carquinez Strait keep Martinez 5–10 degrees cooler than Concord or Walnut Creek in summer. This affects plant selection and watering needs — your lawn won't stress as quickly, but the wind can dry out exposed areas faster.",
      },
      {
        question:
          "Can you handle erosion control on hillside properties?",
        answer:
          "Absolutely. We install retaining walls, terraced planting beds, and ground-cover plants to stabilize slopes. For Alhambra Valley and Hidden Valley properties, we often use a combination of native grasses, jute netting, and strategic drainage to manage runoff.",
      },
    ],
    testimonial: {
      quote:
        "Our Alhambra Valley property is on a steep slope with deer everywhere. AL Gardening installed terraced beds with deer-resistant natives — it looks beautiful and actually holds the hillside in place now.",
      name: "Tom P.",
      neighborhood: "Alhambra Valley, Martinez",
    },
  },
  {
    slug: "lafayette",
    name: "Lafayette",
    county: "Contra Costa",
    metaTitle: "Landscaping in Lafayette, CA",
    metaDescription:
      "Expert landscaping, lawn care, and tree services in Lafayette, CA. Serving Burton Valley, Happy Valley, and Reliez Valley. Fire-safe landscaping specialists.",
    headline: "Expert Landscaping in Lafayette",
    subheadline:
      "Serving Lafayette's distinctive neighborhoods — from the sprawling estates of Happy Valley to the family-friendly streets of Burton Valley and the pastoral lots of Reliez Valley.",
    description:
      "Lafayette is the western gateway to the Lamorinda corridor, where tree-covered hillsides, winding roads, and generous lot sizes define the landscape. Properties here range from cozy Burton Valley ranches with swim clubs and block parties to the secluded, multi-acre estates of Happy Valley, one of the East Bay's most prestigious addresses. The Lafayette Reservoir — a 126-acre lake surrounded by hiking trails — anchors the community's outdoor identity. Most of Lafayette sits in USDA Zone 9b and receives water from EBMUD. With over 5,300 acres classified as high fire-hazard severity by Cal Fire — more than any city in Contra Costa County — fire-safe landscaping isn't optional here, it's essential.",
    localChallenges:
      "Lafayette has the most high fire-hazard acreage of any city in Contra Costa County, making defensible space and fire-resistant plant choices a top priority for most properties. The Moraga-Orinda Fire District and Contra Costa County Fire both enforce vegetation management requirements, including maintaining 100 feet of defensible space around structures. The hilly terrain means many properties have steep, hard-to-mow slopes that require specialized equipment or ground-cover alternatives to traditional turf. Soil conditions vary dramatically — Burton Valley has relatively flat lots with heavy clay, while hillside properties in Happy Valley and Reliez Valley sit on rocky, shallow soil with limited topsoil. Mature live oaks are a defining feature of Lafayette properties, and pruning these heritage trees requires careful technique to maintain their health and comply with the city's tree preservation ordinance.",
    neighborhoods: [
      "Burton Valley",
      "Happy Valley",
      "Reliez Valley",
      "Trail Neighborhood",
      "Springhill",
    ],
    landmarks: [
      "Lafayette Reservoir",
      "Briones Regional Park",
      "Lafayette BART",
    ],
    nearbyCitySlugs: ["orinda", "moraga", "walnut-creek"],
    faqs: [
      {
        question:
          "What fire-safe landscaping do I need in Lafayette?",
        answer:
          "Lafayette is in a high fire-hazard zone with strict defensible space requirements — 100 feet of managed vegetation around structures. We create fire-resistant landscapes using low-growing, well-irrigated plants, remove dead vegetation, limb up trees to 6 feet, and maintain fuel breaks. We can bring your property into compliance with both MOFD and Contra Costa County Fire standards.",
      },
      {
        question:
          "Can you maintain steep hillside lots in Happy Valley?",
        answer:
          "Yes — we have the equipment and experience for Lafayette's hillside properties. For slopes too steep to mow safely, we recommend ground-cover alternatives like native bunch grasses, creeping rosemary, or ceanothus that stabilize the soil and reduce fire risk while looking great.",
      },
      {
        question:
          "Do you prune the large oak trees on my Lafayette property?",
        answer:
          "We do. Lafayette's mature live oaks are heritage trees and require careful structural pruning — never topping. We follow ISA best practices and work within the city's tree preservation guidelines. Proper pruning improves tree health, reduces fire fuel, and protects your home from heavy limbs.",
      },
    ],
    testimonial: {
      quote:
        "Our Burton Valley backyard was overgrown and a fire risk. AL Gardening cleared the brush, installed fire-resistant plantings, and now it's both safe and beautiful. They know Lafayette properties inside and out.",
      name: "Mark T.",
      neighborhood: "Burton Valley, Lafayette",
    },
  },
  {
    slug: "orinda",
    name: "Orinda",
    county: "Contra Costa",
    metaTitle: "Landscaping in Orinda, CA",
    metaDescription:
      "Professional landscaping and fire-safe vegetation management in Orinda, CA. Serving Sleepy Hollow, Glorietta, and OCC. Licensed & insured.",
    headline: "Premium Landscaping in Orinda",
    subheadline:
      "From the estate lots of Sleepy Hollow to the hillside homes above the Village — fire-safe, beautiful landscaping for Orinda's unique properties.",
    description:
      "Orinda is one of the East Bay's most desirable communities, defined by its rolling oak-studded hills, winding lanes, and spacious properties. Most homes sit on generous lots ranging from a quarter acre to several acres, with mature native oaks, bay laurels, and redwoods providing a lush canopy that gives Orinda its distinctive character. The community is served by EBMUD and sits in USDA Zone 9b. Property styles range from the midcentury estates of Sleepy Hollow to the family-friendly neighborhoods around Glorietta Elementary, and from hillside custom builds to the manicured grounds around the Orinda Country Club. The Moraga-Orinda Fire District (MOFD) is the primary fire authority, and wildfire preparedness shapes every serious landscaping decision here.",
    localChallenges:
      "Orinda has the most acreage classified as 'very high' fire-hazard severity in all of Contra Costa County — 5,241 acres. The steep hillside terrain means fires spread rapidly uphill through dry grass and brush, making defensible space absolutely critical. MOFD enforces Zone 0 requirements (0–5 feet of ember-resistant space immediately around structures) plus the standard 100-foot defensible space perimeter. Many Orinda properties have heavily wooded lots where dead fuel accumulates rapidly, and the mix of native and non-native vegetation requires careful management. The rocky, shallow hillside soil supports deep-rooted oaks but struggles with turf grass — many homeowners are better served by native ground covers and mulched planting beds. Deer are a constant presence, browsing on ornamentals and new plantings throughout the year.",
    neighborhoods: [
      "Sleepy Hollow",
      "Glorietta",
      "Orinda Country Club",
      "Del Rey",
      "Orinda Village",
    ],
    landmarks: [
      "Orinda Theatre Square",
      "Orinda Country Club",
      "Tilden Regional Park",
    ],
    nearbyCitySlugs: ["lafayette", "moraga"],
    faqs: [
      {
        question:
          "What are Orinda's fire-safe landscaping requirements?",
        answer:
          "Orinda has the most very-high fire-hazard acreage in Contra Costa County. The Moraga-Orinda Fire District requires Zone 0 (ember-resistant zone within 5 feet of structures) and 100 feet of defensible space. We handle all of it — removing combustible vegetation, installing fire-resistant plants, limbing trees, and creating hardscape breaks.",
      },
      {
        question:
          "Can you work on steep hillside lots in Orinda?",
        answer:
          "That's much of Orinda. We have specialized mowing equipment for slopes and regularly design hillside landscapes using terraced beds, retaining walls, and ground covers that stabilize soil while meeting fire-safe requirements. For lots that can't support turf, we create beautiful alternatives with native plants and mulch.",
      },
      {
        question:
          "How do you deal with deer damage in Orinda?",
        answer:
          "Deer pressure is heavy in Orinda, especially near the open spaces. We design with proven deer-resistant plants — salvias, lavenders, native grasses, and ornamental grasses — and can install deer fencing for new plantings or vegetable gardens. We also avoid the species deer love most, like roses and hostas.",
      },
    ],
    testimonial: {
      quote:
        "Our Sleepy Hollow property failed its MOFD fire inspection two years in a row. AL Gardening cleared the defensible space, replaced the euonymus with fire-resistant natives, and we passed with flying colors. Looks better than ever too.",
      name: "Karen W.",
      neighborhood: "Sleepy Hollow, Orinda",
    },
  },
  {
    slug: "moraga",
    name: "Moraga",
    county: "Contra Costa",
    metaTitle: "Landscaping in Moraga, CA",
    metaDescription:
      "Lawn care, landscape design, and fire-safe landscaping in Moraga, CA. Serving Sanders Ranch, Moraga Country Club, and Rheem Valley. Free estimates.",
    headline: "Reliable Landscaping in Moraga",
    subheadline:
      "Serving Moraga's hillside communities — from the executive homes of Sanders Ranch to the established neighborhoods of Rheem Valley and Moraga Country Club.",
    description:
      "Moraga is a small, semi-rural community nestled in the hills between Lafayette and Orinda, with a character all its own. The town's neighborhoods range from the 1950s ranch homes of Rheem Valley Manor with their mature landscaping and flat, family-friendly lots to the newer, larger executive homes of Sanders Ranch tucked into wooded hillsides with direct trail access. Moraga Country Club offers a resort-like setting with 521 residences surrounding an 18-hole golf course. The community borders Las Trampas Wilderness Regional Preserve, which defines its western edge and brings both natural beauty and wildfire risk. Moraga is served by EBMUD and falls in USDA Zone 9b, with a microclimate that's slightly cooler and foggier than Walnut Creek or Concord thanks to its valley location between ridgelines.",
    localChallenges:
      "Moraga has 2,290 acres classified as very-high fire hazard and another 2,238 as high hazard — making fire-safe landscaping a priority for nearly every property. The Moraga-Orinda Fire District enforces strict defensible space rules, and properties backing to Las Trampas Wilderness face the highest risk. Annual weed abatement is mandatory, and many neighborhoods receive compliance notices each spring. The varied terrain means soil conditions shift block by block: Rheem Valley has heavier clay on flatter ground, while hillside properties in Sanders Ranch and Campolindo sit on rocky, shallow soil with exposed sandstone. The cooler, foggier microclimate reduces summer heat stress but creates conditions favorable to fungal lawn diseases like brown patch — requiring adjusted mowing heights and careful irrigation scheduling. Mature trees throughout Moraga, including large valley oaks and coast live oaks, need professional structural pruning to reduce hazardous limb failures.",
    neighborhoods: [
      "Sanders Ranch",
      "Moraga Country Club",
      "Rheem Valley Manor",
      "Campolindo",
      "Corliss",
    ],
    landmarks: [
      "Las Trampas Wilderness",
      "Moraga Commons Park",
      "Campolindo High School",
    ],
    nearbyCitySlugs: ["lafayette", "orinda"],
    faqs: [
      {
        question:
          "Do you work in the Moraga Country Club community?",
        answer:
          "Yes — we maintain several properties within Moraga Country Club. We're familiar with the community's standards and work within HOA guidelines for plantings, tree pruning, and lawn care. The golf-course-adjacent lots have specific drainage considerations we account for.",
      },
      {
        question:
          "Why does my Moraga lawn get brown patches even when I water regularly?",
        answer:
          "Moraga's cooler, foggier microclimate creates conditions where fungal diseases like brown patch thrive — especially in shaded areas with poor air circulation. We treat with targeted fungicides when needed, but prevention is key: proper mowing height (never cutting more than one-third), morning-only watering, and ensuring good drainage.",
      },
      {
        question:
          "What are the weed abatement requirements in Moraga?",
        answer:
          "The Moraga-Orinda Fire District requires annual vegetation management, and most properties receive compliance notices in spring. We handle full weed abatement — mowing, clearing brush, and creating defensible space — so you don't have to worry about citations or fire safety. We can also set up a recurring spring schedule.",
      },
    ],
    testimonial: {
      quote:
        "We moved to Sanders Ranch and had no idea about the fire abatement requirements. AL Gardening not only got us compliant but designed a hillside garden that's both fire-safe and gorgeous. Real local expertise.",
      name: "Lisa K.",
      neighborhood: "Sanders Ranch, Moraga",
    },
  },
  {
    slug: "danville",
    name: "Danville",
    county: "Contra Costa",
    metaTitle: "Landscaping in Danville, CA",
    metaDescription:
      "Premium lawn care, landscape design, and tree services in Danville, CA. Serving Blackhawk, Sycamore Valley, and Tassajara. Satisfaction guaranteed.",
    headline: "Premium Landscaping in Danville",
    subheadline:
      "From the gated estates of Blackhawk to the tree-lined streets of Sycamore Valley and the modern communities of Tassajara — landscaping that matches Danville's high standards.",
    description:
      "Danville occupies a prime stretch of the San Ramon Valley at the base of Mt. Diablo, where the Iron Horse Trail winds through town and oak-studded hillsides frame the community. Properties here span a wide range: the gated, golf-course-adjacent estates of Blackhawk with their 2,000+ homes and strict HOA oversight; the established, tree-canopied neighborhoods of Sycamore Valley and Greenbrook; and the newer master-planned communities of Tassajara to the east. Danville gets hot — summer temperatures regularly exceed 95°F — and the San Ramon Valley Fire Protection District manages fire risk on the hillside perimeter. Water service comes from EBMUD in most areas, with the San Ramon Valley Recycled Water Program providing reclaimed water for many landscape irrigation systems.",
    localChallenges:
      "Blackhawk's HOA is one of the strictest in the East Bay. The Architectural Review Committee meets twice monthly to review landscaping plans, and all exterior changes must be pre-approved. Annual weed abatement of Blackhawk's hillsides costs the HOA $120,000+ per year, and individual properties are expected to maintain impeccable standards. Beyond Blackhawk, Danville's valley-floor properties deal with the same heavy clay soil found throughout central Contra Costa, compounded by intense summer heat that bakes exposed soil. The Tassajara area features newer homes on smaller lots with less mature landscaping — many homeowners here want instant curb appeal with low-water plantings. Mt. Diablo's proximity means properties on the eastern edge of town face fire hazard zones, requiring defensible space management and fire-resistant plant selections.",
    neighborhoods: [
      "Blackhawk",
      "Sycamore Valley",
      "Greenbrook",
      "Tassajara",
      "Diablo Country Club",
    ],
    landmarks: [
      "Iron Horse Trail",
      "Mt. Diablo State Park",
      "Danville Town Center",
    ],
    nearbyCitySlugs: ["san-ramon", "walnut-creek"],
    faqs: [
      {
        question:
          "Do you work with Blackhawk's HOA requirements?",
        answer:
          "Yes. We're experienced with Blackhawk's Architectural Review Committee process. We can prepare landscaping plans that meet the community's standards, submit them for approval, and execute the work. We understand the HOA's expectations for ongoing maintenance quality as well.",
      },
      {
        question:
          "Can you install drought-tolerant landscaping for my Tassajara home?",
        answer:
          "Absolutely. Many Tassajara homeowners want low-water landscapes that still look lush. We design with proven drought-tolerant plants suited to the San Ramon Valley heat — ornamental grasses, Mediterranean shrubs, and native perennials — combined with efficient drip irrigation and decorative mulch.",
      },
      {
        question:
          "Do I need fire-safe landscaping in Danville?",
        answer:
          "If your property borders the Mt. Diablo hillside or open space areas, yes. The San Ramon Valley Fire Protection District requires defensible space, and we can bring your property into compliance with fire-resistant plantings, proper tree clearance, and brush removal.",
      },
    ],
    testimonial: {
      quote:
        "Getting anything landscaping-related approved by the Blackhawk HOA is not easy. AL Gardening handled the whole process — design, submission, and build. Our yard is the best on the street now.",
      name: "Richard & Amy S.",
      neighborhood: "Blackhawk, Danville",
    },
  },
  {
    slug: "san-ramon",
    name: "San Ramon",
    county: "Contra Costa",
    metaTitle: "Landscaping in San Ramon, CA",
    metaDescription:
      "Professional landscaping, lawn care, and tree services in San Ramon, CA. Serving Dougherty Valley, Canyon Lakes, Crow Canyon, and Westside. Free estimates.",
    headline: "Professional Landscaping in San Ramon",
    subheadline:
      "Serving San Ramon's diverse communities — from the hilltop views of Westside to the master-planned streets of Dougherty Valley and the golf-course homes of Crow Canyon.",
    description:
      "San Ramon is a polished Tri-Valley city where planned communities, top-rated schools, and corporate campuses create a suburban landscape with high curb-appeal expectations. The city's neighborhoods span several distinct characters: Westside San Ramon offers established homes on generous lots with rolling-hill views and mature trees; Dougherty Valley is one of the Bay Area's newest master-planned communities with modern homes and HOA-maintained common areas; Crow Canyon wraps around a private country club; and Canyon Lakes features Mediterranean-style homes with mountain views. Water service is split between EBMUD (western San Ramon) and DSRSD (Dublin San Ramon Services District, serving Dougherty Valley). The city participates in the San Ramon Valley Recycled Water Program, which provides reclaimed water to parks, schools, and many residential landscape irrigation systems.",
    localChallenges:
      "San Ramon straddles the transition between the inner East Bay's moderate climate and the Tri-Valley's hotter summer temperatures. Dougherty Valley, on the city's eastern side, regularly sees summer highs 5–8 degrees warmer than Westside neighborhoods sheltered by the hills. This temperature gradient means irrigation schedules and plant selections should differ between east and west San Ramon. HOA oversight is pervasive — Dougherty Valley, Canyon Lakes, and Crow Canyon all have active architectural committees that review landscaping changes. Many Dougherty Valley homes have compact yards with limited square footage, making space-efficient design and vertical plantings important. The DSRSD service area uses Zone 7 Water Agency supplies, which can face allocation restrictions during drought years. Westside properties on larger, hillside lots may need slope stabilization and fire-safe vegetation management near the open space boundaries.",
    neighborhoods: [
      "Dougherty Valley",
      "Canyon Lakes",
      "Crow Canyon",
      "Westside",
      "Montevideo",
    ],
    landmarks: [
      "San Ramon Central Park",
      "Iron Horse Trail",
      "Bishop Ranch",
    ],
    nearbyCitySlugs: ["danville", "dublin", "pleasanton"],
    faqs: [
      {
        question:
          "Which water district serves my San Ramon home?",
        answer:
          "Western San Ramon is served by EBMUD, while Dougherty Valley and eastern areas are served by DSRSD (Dublin San Ramon Services District). Water rates and conservation rules differ between the two. We're familiar with both and can optimize your irrigation accordingly.",
      },
      {
        question:
          "Can you work within Dougherty Valley's HOA guidelines?",
        answer:
          "Yes — we work with multiple HOAs in San Ramon including Dougherty Valley, Canyon Lakes, and Crow Canyon. We understand the approval processes and design within each community's standards. Many Dougherty Valley homeowners want to maximize their compact yards, and we specialize in space-efficient landscape designs.",
      },
      {
        question:
          "Do you maintain properties along the Iron Horse Trail?",
        answer:
          "We maintain many homes along the trail. These properties have high visibility, so consistent maintenance matters. We also address the common issue of trail-side weeds and debris migrating into yards, and can install border plantings or edging to define the property line.",
      },
    ],
    testimonial: {
      quote:
        "Our Dougherty Valley yard is small but AL Gardening made it feel twice the size with smart planting and a clean design. The HOA even complimented us on it — that never happens.",
      name: "Priya & Raj N.",
      neighborhood: "Dougherty Valley, San Ramon",
    },
  },
  {
    slug: "oakley",
    name: "Oakley",
    county: "Contra Costa",
    metaTitle: "Landscaping Services in Oakley, CA",
    metaDescription:
      "Lawn care, landscape design, and tree services in Oakley, CA. Serving Summer Lakes, Cypress Grove, and Emerson Ranch. Heat-smart landscaping experts.",
    headline: "Landscaping Services in Oakley",
    subheadline:
      "Heat-smart lawn care and landscaping for Oakley's growing communities — from the waterways of Summer Lakes to the family neighborhoods of Cypress Grove and Emerson Ranch.",
    description:
      "Oakley sits in East Contra Costa County along the Sacramento–San Joaquin Delta, a fast-growing community where new master-planned neighborhoods blend with the area's agricultural heritage. Unlike the clay-heavy soils found in central Contra Costa, Oakley's ground is predominantly sandy loam — lighter, faster-draining soil that warms quickly in spring but loses moisture rapidly during the area's scorching summers. Temperatures here regularly exceed 100°F from June through September, making heat-tolerant landscaping and efficient irrigation non-negotiable. Water service comes from the Diablo Water District, which serves a 21-square-mile area including Oakley, Cypress Corridor, Summer Lakes, and portions of Bethel Island. The city's Delta-adjacent location gives it a distinct character — waterway views, levee trails, and a breezier evening climate than Brentwood to the south.",
    localChallenges:
      "Oakley's sandy loam soil is a mixed blessing. It drains beautifully and warms up fast in spring, giving lawns an early-season head start. But it also dries out quickly and holds fewer nutrients than clay, meaning more frequent fertilization and irrigation. During triple-digit summer heat, even well-irrigated lawns can brown within days if watering timing is off — we schedule irrigation for pre-dawn hours and recommend deep-cycle watering to push roots below the hot surface layer. Many newer neighborhoods like Cypress Grove, Summer Lakes, and Emerson Ranch were built with builder-grade landscaping that needs upgrading within 3–5 years as the minimal plantings mature (or don't). The Delta breezes that cool Oakley in the evenings also carry salt and humidity that can stress certain ornamental plants, making locally adapted species a smarter choice.",
    neighborhoods: [
      "Summer Lakes",
      "Cypress Grove",
      "Emerson Ranch",
      "Vintage Parkway",
      "Bethel Island",
    ],
    landmarks: [
      "Summer Lake Park",
      "Big Break Regional Shoreline",
      "Delta de Anza Regional Trail",
    ],
    nearbyCitySlugs: ["brentwood", "clayton"],
    faqs: [
      {
        question:
          "Why does my Oakley lawn need more water than my friend's in Walnut Creek?",
        answer:
          "Oakley's sandy loam soil drains much faster than Walnut Creek's clay. Water passes through instead of being retained, so you need shorter, more frequent irrigation cycles. We typically program Oakley systems for 3–4 short cycles per week rather than 2 deep soaks.",
      },
      {
        question:
          "Can you upgrade the builder landscaping on my new Oakley home?",
        answer:
          "That's one of our most common requests in Oakley. Builder-grade landscaping is minimal and often poorly suited to the local heat. We replace underperforming plants with heat-tolerant varieties, upgrade drip irrigation, add mulch to retain moisture, and design a landscape that actually thrives in East County conditions.",
      },
      {
        question:
          "What trees grow well in Oakley's heat?",
        answer:
          "We recommend heat-tolerant species like Chinese pistache, crape myrtle, desert willow, and California native oaks. These handle the 100°F+ summers and Oakley's sandy soil. We avoid trees that struggle in extreme heat, like Japanese maples or birches, which burn quickly here.",
      },
    ],
    testimonial: {
      quote:
        "The builder landscaping on our Cypress Grove home was dead within two summers. AL Gardening ripped it out and put in plants that actually survive the heat. Our water bill dropped too — smart irrigation made a huge difference.",
      name: "Mike & Diana L.",
      neighborhood: "Cypress Grove, Oakley",
    },
  },
  {
    slug: "brentwood",
    name: "Brentwood",
    county: "Contra Costa",
    metaTitle: "Landscaping in Brentwood, CA",
    metaDescription:
      "Professional lawn care and landscape design in Brentwood, CA. Serving Deer Ridge, Shadow Lakes, Summerset, and new communities. Heat-smart landscaping.",
    headline: "Landscaping Built for Brentwood's Heat",
    subheadline:
      "From the vineyard-view homes of Deer Ridge to the active-adult community of Summerset — landscaping designed to thrive in East County's extreme summers.",
    description:
      "Brentwood is East Contra Costa County's largest city, a community that has grown rapidly from its agricultural roots into a city of master-planned neighborhoods, vineyard-adjacent estates, and active-adult communities. Summers here are among the hottest in the entire Bay Area — triple digits are routine from June through September, and the dry Delta wind can desiccate unprotected plantings within days. Brentwood's soil ranges from sandy loam in the flatlands to heavier clay near the foothills, and both types demand tailored approaches. Water comes from a combination of sources: the East Contra Costa Irrigation District, Contra Costa Water District, and the city's own treated water. Neighborhoods like Deer Ridge perch on foothill ridgelines with golf-course views, while Shadow Lakes offers a quieter, pond-side setting, and Summerset provides a 55-plus resort lifestyle with its own clubhouses and golf course.",
    localChallenges:
      "Extreme heat is the defining challenge in Brentwood. When temperatures hit 105°F+, lawns go dormant, sprinkler heads warp, and plants that would thrive in coastal climates simply fail. We select only proven heat-hardy species and design irrigation systems with the thermal stress in mind — drip zones for beds, high-efficiency rotary heads for turf, and smart controllers that adjust to real-time weather. Many newer Brentwood developments (Sand Creek, Sterling Preserve) feature smart-home integration that we can tie landscape irrigation into. The rapid pace of new construction means many homeowners inherit builder-grade landscaping that was never designed for long-term success in this climate. Deer Ridge and Shadow Lakes have HOAs with maintained common areas and expectations for individual lot standards. The agricultural heritage also means some properties border active vineyards or orchards, where spray drift and dust are considerations for landscape planning.",
    neighborhoods: [
      "Deer Ridge",
      "Shadow Lakes",
      "Summerset",
      "Sand Creek",
      "Sterling Preserve",
    ],
    landmarks: [
      "Brentwood Golf Club",
      "Harvest Time Festival Grounds",
      "Marsh Creek State Historic Park",
    ],
    nearbyCitySlugs: ["oakley", "clayton"],
    faqs: [
      {
        question:
          "What plants actually survive Brentwood summers?",
        answer:
          "We use heat-proven performers: lantana, rosemary, ornamental grasses like deer grass and muhly grass, desert willow, crape myrtle, and Mediterranean shrubs like westringia and grevillea. For turf, Bermuda grass varieties handle the heat far better than fescue, which goes dormant here every summer.",
      },
      {
        question:
          "I'm in Summerset — do you work in 55-plus communities?",
        answer:
          "Yes — we maintain properties in Summerset and understand the community's HOA standards. Many Summerset homeowners want low-maintenance, low-water landscapes that look neat year-round. We design with that in mind — clean lines, easy-care plants, and automated irrigation.",
      },
      {
        question:
          "How often should I water my Brentwood lawn in summer?",
        answer:
          "In peak summer heat (100°F+), cool-season lawns need water daily to survive — which is why we often recommend warm-season varieties like Bermuda that only need 3–4 times per week. We program irrigation for 4–5 AM to minimize evaporation, and use cycle-and-soak methods to prevent runoff on Brentwood's sandy soil.",
      },
    ],
    testimonial: {
      quote:
        "After two summers of watching our lawn die, we called AL Gardening. They switched us to Bermuda grass, upgraded our sprinklers, and our yard finally looks green in August. Total game changer for Brentwood.",
      name: "Carlos & Maria V.",
      neighborhood: "Deer Ridge, Brentwood",
    },
  },
  {
    slug: "clayton",
    name: "Clayton",
    county: "Contra Costa",
    metaTitle: "Landscaping in Clayton, CA",
    metaDescription:
      "Lawn care, landscape design, and tree services in Clayton, CA. Serving Oakhurst, Mt. Diablo foothills, and downtown Clayton. Licensed & insured.",
    headline: "Landscaping in Clayton",
    subheadline:
      "Nestled at the base of Mt. Diablo — professional lawn care and landscaping for Clayton's foothill properties, Oakhurst Country Club, and the charming downtown neighborhoods.",
    description:
      "Clayton is a small, close-knit city tucked into the foothills at the base of Mt. Diablo — a community that residents affectionately call their 'Mayberry.' With just over 11,000 residents, Clayton retains a small-town feel with a walkable downtown, community events in The Grove, and a deep connection to the surrounding open space. Properties range from the golf-course homes of Oakhurst Country Club — a Ron Fream-designed, par-72 championship course set among 360 acres of lakes and natural wetlands — to established ranch-style homes near downtown and newer developments around the Black Diamond area. Water is provided by Contra Costa Water District (CCWD), and the city's proximity to Mt. Diablo State Park puts many properties within designated fire-hazard severity zones.",
    localChallenges:
      "Clayton's defining feature is its proximity to Mt. Diablo. Properties on the south and west edges of town sit in high and very-high fire-hazard severity zones, requiring robust defensible space management. The Contra Costa County Fire Protection District enforces vegetation clearance, and the community has seen wildfires come uncomfortably close — the 'Deer Zone' fires on Mt. Diablo's slopes have repeatedly threatened Clayton neighborhoods. Soil conditions transition from heavier clay near downtown to rockier, drier ground on the hillside lots. The foothill properties often have steep grades, limited flat yard space, and challenging access for equipment. Oakhurst Country Club residents deal with golf-course-adjacent drainage (runoff from maintained fairways) and the HOA's expectations for complementary landscaping quality. Native wildlife including deer, turkeys, and coyotes are a daily reality, and plantings need to account for browsing pressure.",
    neighborhoods: [
      "Oakhurst Country Club",
      "Black Diamond",
      "Stranahan",
      "Clayton Valley",
      "Diablo Estates",
    ],
    landmarks: [
      "Mt. Diablo State Park",
      "Oakhurst Country Club",
      "Clayton Community Park",
    ],
    nearbyCitySlugs: ["concord", "oakley", "brentwood"],
    faqs: [
      {
        question:
          "How close are fire zones to Clayton neighborhoods?",
        answer:
          "Very close. Properties on Clayton's south and west edges border Mt. Diablo and fall within high or very-high fire-hazard zones. We provide full defensible space management — brush clearing, fire-resistant plantings, and tree limbing — to keep your property compliant and safe.",
      },
      {
        question:
          "Do you maintain properties in Oakhurst Country Club?",
        answer:
          "Yes. We work with several homeowners inside Oakhurst and understand the community's standards. The golf-course-adjacent setting requires attention to drainage, and we coordinate our maintenance schedule to complement the club's grounds crew timing.",
      },
      {
        question:
          "What landscaping works on Clayton's foothill lots?",
        answer:
          "Foothill properties do best with native and Mediterranean plants that handle dry, rocky soil and summer heat. We use manzanita, California buckwheat, lavender, and native bunch grasses that anchor hillside soil while requiring minimal irrigation. For flat areas, we can install drought-tolerant turf or decorative crushed rock.",
      },
    ],
    testimonial: {
      quote:
        "Our lot backs right up to Mt. Diablo open space. AL Gardening created a fire-safe buffer that actually looks like a designed garden — not just a cleared dirt zone. They really understand Clayton properties.",
      name: "Jeff & Sandra B.",
      neighborhood: "Diablo Estates, Clayton",
    },
  },

  // ─── ALAMEDA COUNTY ────────────────────────────────────────────────
  {
    slug: "dublin",
    name: "Dublin",
    county: "Alameda",
    metaTitle: "Landscaping in Dublin, CA",
    metaDescription:
      "Professional lawn care and landscape design in Dublin, CA. Serving Dublin Ranch, Positano Hills, Emerald Glen, and Wallis Ranch. Free estimates.",
    headline: "Professional Landscaping in Dublin",
    subheadline:
      "From the hilltop views of Dublin Ranch to the contemporary homes of Positano Hills and the park-side neighborhoods of Emerald Glen — landscaping that thrives in the Tri-Valley heat.",
    description:
      "Dublin is a rapidly growing Tri-Valley city where new construction is still actively expanding the eastern edge of town. The city's neighborhoods reflect its evolution: central Dublin around Emerald Glen Park has established homes from the 1980s–2000s, while Dublin Ranch, Positano Hills, and Wallis Ranch feature newer construction stretching into the eastern hills. Dublin's Tri-Valley location means hot summers — regularly topping 95°F — and a USDA Zone 9b climate that demands heat-tolerant plantings and efficient irrigation. Water is provided by Dublin San Ramon Services District (DSRSD), which sources from Zone 7 Water Agency. The 50-acre Emerald Glen Park, complete with the Dublin Wave Waterpark, anchors the community, and the Iron Horse Trail connects Dublin to its neighbors.",
    localChallenges:
      "Dublin's biggest landscaping challenge is managing new-construction landscapes in extreme Tri-Valley heat. Many Dublin Ranch, Positano Hills, and Wallis Ranch homes were built in the last 5–15 years with builder-grade landscaping that fails within a few summers — undersized plants, inadequate irrigation coverage, and poor soil preparation over compacted fill dirt. The compacted soil on graded lots doesn't absorb water well, leading to runoff and dry pockets even when sprinklers run regularly. DSRSD enforces water conservation measures, and the Zone 7 supply can face restrictions during drought years. HOAs in Dublin Ranch and Positano Hills have landscaping standards that require pre-approval for changes. The eastern hill lots in Dublin Ranch deal with wind exposure and steeper grades that complicate both maintenance access and plant establishment. Established neighborhoods around Emerald Glen have maturing landscapes that often need renovation — overgrown shrubs, root-bound trees, and aging irrigation systems.",
    neighborhoods: [
      "Dublin Ranch",
      "Positano Hills",
      "Emerald Glen",
      "Wallis Ranch",
      "East Dublin",
    ],
    landmarks: [
      "Emerald Glen Park",
      "Dublin Wave Waterpark",
      "Iron Horse Trail",
    ],
    nearbyCitySlugs: ["pleasanton", "san-ramon"],
    faqs: [
      {
        question:
          "Can you fix the builder landscaping on my Dublin Ranch home?",
        answer:
          "Absolutely — it's one of our most requested services in Dublin. Builder-grade landscapes are designed to look good on move-in day, not to thrive long-term in Tri-Valley heat. We replace failing plants with proven performers, amend the compacted fill soil, and upgrade irrigation to actually reach every zone properly.",
      },
      {
        question:
          "Do you work with Dublin Ranch and Positano Hills HOAs?",
        answer:
          "Yes. We understand the approval process for both communities and design within their guidelines. We can prepare landscape plans for HOA review and handle the full process from design through installation.",
      },
      {
        question:
          "How do you handle the compacted soil on graded lots?",
        answer:
          "New-construction lots in Dublin are typically graded with compacted fill that resists water absorption. We use core aeration, compost amendment, and in some cases deep ripping to break up the hardpan layer. For new planting beds, we excavate and amend the soil to give roots a fighting chance.",
      },
      {
        question:
          "What's the water situation in Dublin?",
        answer:
          "Dublin is served by DSRSD, which draws from Zone 7 Water Agency. During drought years, allocations can tighten. We design with water efficiency in mind — drip irrigation for beds, high-efficiency heads for turf, and smart controllers that adjust to weather. We can also help you qualify for DSRSD's water-wise rebate programs.",
      },
    ],
    testimonial: {
      quote:
        "Our Wallis Ranch home had the typical builder landscaping — half dead after one summer. AL Gardening redesigned everything with proper soil prep and plants that actually handle Dublin heat. It's been two years and everything is thriving.",
      name: "Anita & Kevin C.",
      neighborhood: "Wallis Ranch, Dublin",
    },
  },
  {
    slug: "pleasanton",
    name: "Pleasanton",
    county: "Alameda",
    metaTitle: "Landscaping in Pleasanton, CA",
    metaDescription:
      "Premium landscaping, lawn care, and tree services in Pleasanton, CA. Serving Ruby Hill, Kottinger Ranch, and Birdland. Licensed, insured, satisfaction guaranteed.",
    headline: "Premium Landscaping in Pleasanton",
    subheadline:
      "From the gated luxury of Ruby Hill to the charming streets of Birdland and the hilltop estates of Kottinger Ranch — landscaping that reflects Pleasanton's refined character.",
    description:
      "Pleasanton is the Tri-Valley's most established and affluent community, a city that consistently ranks among the best places to live in California. The downtown's Main Street charm, top-rated schools, and family-oriented culture attract homeowners who invest in their properties — and expect landscaping to match. Neighborhoods span a wide range: Ruby Hill is a gated, luxury community where estates on large lots command premium maintenance; Kottinger Ranch offers executive hillside homes built by Westbrook Homes in the 1990s with hiking-trail access and open-space views; Birdland (the local name for Pleasanton Valley, where streets are named after birds) features established ranches from the 1960s–70s with no HOA and mature, large-canopy trees. Water comes from the City of Pleasanton's water utility, sourced through Zone 7 Water Agency. The climate mirrors Dublin's Tri-Valley heat, landing in USDA Zone 9b.",
    localChallenges:
      "Pleasanton's diverse neighborhoods demand very different landscaping approaches. Ruby Hill's gated community expects estate-quality maintenance — manicured hedges, pristine turf, and seasonal color rotations — with HOA standards to match. Kottinger Ranch's hillside lots have steep grades, rocky soil, and open-space boundaries that require fire-safe vegetation management and erosion control. Birdland, by contrast, is an older neighborhood with massive street trees, root-heaved sidewalks, and aging irrigation systems that need updating — but no HOA oversight means homeowners have freedom to design as they wish. Pleasanton's summer heat (regularly 95–100°F) combined with Zone 7's potential drought-year restrictions means water-efficient design is essential across all neighborhoods. The city's tree preservation ordinance protects significant trees, requiring permits for removal and careful pruning practices.",
    neighborhoods: [
      "Ruby Hill",
      "Kottinger Ranch",
      "Birdland",
      "Vintage Hills",
      "Pleasanton Valley",
    ],
    landmarks: [
      "Downtown Main Street",
      "Alviso Adobe Community Park",
      "Shadow Cliffs Regional Recreation Area",
    ],
    nearbyCitySlugs: ["dublin", "san-ramon"],
    faqs: [
      {
        question:
          "Do you maintain properties in Ruby Hill?",
        answer:
          "Yes — we service several Ruby Hill estates. We understand the community's expectations for premium maintenance: detailed mowing patterns, precision-trimmed hedges, seasonal color installations, and irrigation management for large-lot properties. We coordinate with the HOA's standards.",
      },
      {
        question:
          "Can you handle the steep lots in Kottinger Ranch?",
        answer:
          "Absolutely. Kottinger Ranch's hillside properties need specialized equipment and design strategies. We install terraced plantings, ground covers, and retaining solutions that manage erosion while meeting fire-safe requirements along the open-space boundary. We maintain access paths for ongoing care.",
      },
      {
        question:
          "My Birdland home has giant trees — can you prune them?",
        answer:
          "Birdland's mature trees are one of the neighborhood's best features but need regular structural pruning to stay safe and healthy. We follow ISA standards and work within Pleasanton's tree preservation ordinance. For large trees that may need removal, we handle the city permit process.",
      },
      {
        question:
          "What if there are water restrictions in Pleasanton?",
        answer:
          "Pleasanton sources from Zone 7 Water Agency, which can implement restrictions during drought. We design for resilience — drought-tolerant plants, efficient drip irrigation, mulched beds, and smart controllers. If restrictions are active, we adjust schedules to maximize the water you're allowed while keeping your landscape healthy.",
      },
    ],
    testimonial: {
      quote:
        "We needed someone who could match the standard at Ruby Hill. AL Gardening delivers every single week — the lawn striping, the hedge detail, the seasonal flowers. Our neighbors keep asking for their number.",
      name: "Robert & Christine D.",
      neighborhood: "Ruby Hill, Pleasanton",
    },
  },
];

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}

export function getNearbyCities(slug: string): CityData[] {
  const city = getCityBySlug(slug);
  if (!city) return [];
  return city.nearbyCitySlugs
    .map((s) => getCityBySlug(s))
    .filter((c): c is CityData => c !== undefined);
}

export function getCitiesByCounty(county: string): CityData[] {
  return cities.filter((c) => c.county === county);
}

export const cityNavLinks = cities.map((c) => ({
  label: c.name,
  href: `/service-areas/${c.slug}`,
}));
