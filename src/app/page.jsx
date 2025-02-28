"use client";
import { useRouter } from "next/navigation";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Breadcrumbs,
  BreadcrumbItem,
  Tabs,
  Tab,
  Progress,
  Skeleton,
  useDisclosure,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalContent,
  Avatar,
} from "@nextui-org/react";
import React from "react";
import { FaFlask } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { FaScroll } from "react-icons/fa";
import { FaFortAwesome } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaCannon } from "react-icons/fa";
import { FaShip } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { FaBomb } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaMonument } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaBroadcastTower } from "react-icons/fa";
import { FaTrain } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { FaComputer } from "react-icons/fa";  // ⚠️ Check if this exists; use FaDesktop if needed
import { FaSatellite } from "react-icons/fa";
import { FaRadiation } from "react-icons/fa";
import { FaSatelliteDish } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaSyringe } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";


import { FaGlobe } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa";
import {  } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import { FaDna } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FaHouse } from "react-icons/fa6";
import { MdOutlineEngineering } from "react-icons/md";
import { FaAtom } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { IoMdMedical } from "react-icons/io";
import { IoIosPlanet } from "react-icons/io";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import { useState, useEffect } from "react";
import Links from "./SidebarLinksData";
import { useContent } from "./contexts/ContentContext";

const TimelineEvent = ({ date, title, description, icon: Icon, index }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const isEven = index % 2 === 0;
  
    return (
      <div className="timeline-item flex flex-col md:flex-row items-center justify-between mb-16 w-full">
        {/* Left content for even indexes */}
        {isEven && (
          <div className="w-full md:w-5/12 flex justify-end pr-4">
<div className="relative w-full max-w-sm group">
  {/* Outside shining shadow effect on hover */}
  <div className="absolute -inset-2 bg-white/30 rounded-lg 
                  opacity-0 blur-none 
                  transition-all duration-700 ease-in-out 
                  group-hover:opacity-100 group-hover:blur-xl"></div>

  <Card 
    shadow="sm"
    className="timeline-card bg-open text-white w-full relative overflow-hidden 
               group-hover:scale-105 transition-transform duration-300"
  >
    <CardHeader className="flex justify-between items-center border-b border-white/10">
      <h3 className="text-lg font-bold">{date}</h3>
      <Button color="default" className="bg-white text-open" onClick={onOpen}>
        Details
      </Button>
    </CardHeader>
    <CardBody>
      <h4 className="font-medium text-lg mb-2">{title}</h4>
      <p className="text-sm text-white/90">{description.substring(0, 150)}...</p>
    </CardBody>
  </Card>
</div>


          </div>
        )}
  
        {/* Center Timeline Connector with fixed vertical line and icons */}
        <div className="timeline-center flex flex-col items-center mx-4">
          <div className="w-10 h-10 rounded-full bg-sidebarbg flex items-center justify-center border-2 border-white">
            {Icon && <Icon className="w-5 h-5 text-white" />}
          </div>
        </div>
  
        {/* Right content for odd indexes */}
        {!isEven && (
          <div className="w-full md:w-5/12 flex justify-start pl-4">
            <div className="relative w-full max-w-sm group">
              {/* Outside shining shadow effect on hover */}
              <div className="absolute -inset-2 bg-white/30 rounded-lg 
                  opacity-0 blur-none 
                  transition-all duration-700 ease-in-out 
                  group-hover:opacity-100 group-hover:blur-xl"></div>
              
              <Card 
                shadow="sm"
                className="timeline-card bg-open text-white w-full relative overflow-hidden group-hover:scale-105 transition-transform duration-300 z-10"
              >
                <CardHeader className="flex justify-between items-center border-b border-white/10">
                  <h3 className="text-lg font-bold">{date}</h3>
                  <Button color="default" className="bg-white text-open" onClick={onOpen}>
                    Details
                  </Button>
                </CardHeader>
                <CardBody>
                  <h4 className="font-medium text-lg mb-2">{title}</h4>
                  <p className="text-sm text-white/90">{description.substring(0, 150)}...</p>
                </CardBody>
              </Card>
            </div>
          </div>
        )}
  
        {/* Modal for details */}
        <Modal 
          isOpen={isOpen} 
          onOpenChange={onOpenChange}
          scrollBehavior="inside"
          backdrop="blur"
          className="bg-sidebarbg"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-white">
                  <h1 className="font-bold">{title}</h1>
                  <p className="text-sm font-normal">{date}</p>
                </ModalHeader>
                <ModalBody className="text-white">
                  <p className="whitespace-normal break-words">{description}</p>
                </ModalBody>
                <ModalFooter>
                  <Button 
                    color="default" 
                    className="bg-white text-sidebarbg"
                    onPress={onClose}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    );
  };
  

const Home = () => {
  const [selected, setSelected] = useState("ancient");
  const [tabSize, setTabSize] = useState('md');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const homeLink = Links.find((link) => link.name === "Home");
  
  // Timeline data
  const timelineData = {
    ancient: [
        {
          date: "c. 3000 BCE",
          title: "Indus Valley Civilization",
          description: "One of the world's earliest urban civilizations with advanced civil engineering, including sophisticated water management systems, standardized weights and measures, underground drainage systems, multi-storied houses, and city planning with grid patterns.",
          icon: MdOutlineEngineering
        },
        {
          date: "c. 2600-1900 BCE",
          title: "Harappan Metallurgy",
          description: "Indus Valley people were skilled in metallurgy, using copper, bronze, tin, and lead for various tools and artifacts. They developed techniques for lost-wax casting, bead-making, and crafting sophisticated jewelry.",
          icon: FaIndustry
        },
        {
          date: "c. 2000 BCE",
          title: "Concept of Zero (Early Traces)",
          description: "Though the full mathematical zero was formalized later, early traces of its concept appear in Indus inscriptions and measurement systems, showing advanced numerical understanding.",
          icon: HiOutlineAcademicCap
        },
        {
          date: "c. 1800 BCE",
          title: "Indus Script and Standardized Weights",
          description: "The Indus Valley Civilization used a system of standardized weights and measures for trade, along with an undeciphered script that indicates a complex writing system and record-keeping.",
          icon: FaBalanceScale
        },
        {
          date: "c. 1500 BCE",
          title: "Early Use of Iron",
          description: "India was one of the first regions to use iron for tools and weapons, marking the beginning of the Iron Age in the Indian subcontinent.",
          icon: FaHammer
        },
        {
          date: "c. 800-500 BCE",
          title: "Vedanga Jyotisha – Indian Astronomy and Timekeeping",
          description: "One of the earliest Indian texts on astronomy and timekeeping, describing planetary motions, lunar cycles, and a 5-year calendar system. It laid the foundation for later astronomical advancements.",
          icon: IoIosPlanet
        },
        {
          date: "c. 700 BCE",
          title: "Shulba Sutras – Geometry and Mathematics",
          description: "Ancient Indian texts describing geometrical principles, including the earliest use of the Pythagorean theorem, concepts of area, and construction of altars using precise measurements.",
          icon: HiOutlineAcademicCap
        },
        {
          date: "c. 600 BCE",
          title: "First Mention of Ayurveda",
          description: "Ayurveda, India's traditional system of medicine, was developed and codified in texts like the Charaka Samhita and Sushruta Samhita. It introduced holistic healing, herbal medicine, and surgical techniques.",
          icon: IoMdMedical
        },
        {
          date: "c. 500 BCE",
          title: "Sushruta Samhita – Surgical Advancements",
          description: "Sushruta, the 'Father of Surgery,' described over 300 surgical procedures, 120 surgical instruments, and performed complex surgeries, including rhinoplasty (nose reconstruction) and cataract removal.",
          icon: IoMdMedical
        },
        {
          date: "c. 500 BCE",
          title: "Development of Metallurgy – Wootz Steel",
          description: "Ancient Indian metallurgists developed Wootz steel, a high-carbon steel known for its exceptional strength and flexibility. It later influenced the production of Damascus steel.",
          icon: FaIndustry
        },
        {
          date: "c. 400 BCE",
          title: "Panini’s Ashtadhyayi – First Formal Grammar",
          description: "Panini created one of the first formalized systems of grammar and linguistic analysis, forming the foundation of computational linguistics and Sanskrit grammar.",
          icon: HiOutlineAcademicCap
        },
        {
          date: "c. 400 BCE",
          title: "Plastic Surgery Innovations",
          description: "The ancient Indian text 'Sushruta Samhita' described the earliest known techniques of plastic surgery, particularly for reconstructing noses and ears using skin grafts.",
          icon: IoMdMedical
        },
        {
          date: "c. 400 BCE",
          title: "Atomic Theory by Acharya Kanada",
          description: "Kanada, an ancient Indian philosopher-scientist, proposed the idea of atoms ('anu') as fundamental particles that combine in specific ways to form substances, predating modern atomic theory.",
          icon: FaAtom
        },
        {
          date: "c. 300 BCE",
          title: "Kautilya’s Arthashastra – Economic and Political Science",
          description: "A treatise on statecraft, economics, and military strategy, which detailed aspects of governance, espionage, taxation, and economic policies.",
          icon: HiOutlineAcademicCap
        },
        {
          date: "c. 200 BCE",
          title: "Concept of Infinite and Large Numbers",
          description: "Ancient Indian mathematicians used large numbers, including millions and billions, and described mathematical infinity in texts like the Jain mathematical scriptures.",
          icon: HiOutlineAcademicCap
        },
        {
          date: "c. 150 BCE",
          title: "Baudhayana’s Approximation of Pi",
          description: "The Baudhayana Sulba Sutra provided an approximation of π (pi) and concepts similar to the Pythagorean theorem centuries before it was known in Greece.",
          icon: HiOutlineAcademicCap
        },
        {
          date: "c. 50 BCE",
          title: "Nagarjuna’s Contributions to Alchemy",
          description: "Nagarjuna, an ancient Indian scientist, made advancements in chemistry, metallurgy, and medicine, particularly in transmutation and purification techniques.",
          icon: FaFlask
        },
        {
          date: "c. 100 CE",
          title: "Decimal System and Place Value",
          description: "Indian mathematicians pioneered the use of the decimal system and place value notation, which later influenced global mathematics through translations into Arabic and European texts.",
          icon: HiOutlineAcademicCap
        },
        {
          date: "c. 200 CE",
          title: "Charaka Samhita – Internal Medicine",
          description: "The Charaka Samhita, an ancient text on internal medicine, laid the foundation for Ayurveda and described numerous medical treatments, including the concept of digestion and immunity.",
          icon: IoMdMedical
        },
        {
          date: "c. 250 CE",
          title: "Iron Pillar of Delhi",
          description: "A 7-meter iron pillar built during the Gupta period, known for its rust-resistant properties and advanced metallurgy, demonstrating India’s early knowledge of corrosion-resistant iron.",
          icon: FaIndustry
        },
        {
          date: "c. 476 CE",
          title: "Aryabhata’s Astronomical and Mathematical Innovations",
          description: "Aryabhata calculated π (pi) to four decimal places, introduced the concept of zero, explained the Earth’s rotation, described solar and lunar eclipses, and developed trigonometric sine functions.",
          icon: IoIosPlanet
        },
        {
          date: "c. 500 CE",
          title: "Surya Siddhanta – Indian Astronomy",
          description: "An ancient astronomical treatise detailing planetary motion, time measurement, and heliocentric elements, influencing later astronomical research in India and beyond.",
          icon: IoIosPlanet
        },
        {
          date: "c. 550 CE",
          title: "Brahmagupta’s Mathematical Contributions",
          description: "Brahmagupta established rules for zero, negative numbers, quadratic equations, and arithmetic operations, laying the foundation for modern algebra.",
          icon: HiOutlineAcademicCap
        }
      ],
      medieval: [
        {
          date: "c. 700 CE",
          title: "Madhava's Contributions to Calculus",
          description: "Madhava of Sangamagrama pioneered infinite series expansions, including sine and cosine functions, laying the foundation for calculus centuries before Newton and Leibniz.",
          icon: HiOutlineAcademicCap
        },
        {
          date: "c. 750 CE",
          title: "Advances in Astronomy – Bhaskara I",
          description: "Bhaskara I refined Aryabhata’s work on planetary motion, created more precise trigonometric calculations, and discussed zero’s role in mathematical equations.",
          icon: IoIosPlanet
        },
        {
          date: "c. 800 CE",
          title: "Concept of Gravity by Brahmagupta",
          description: "Brahmagupta theorized that the Earth has gravitational force, stating that objects fall due to attraction towards the Earth, preceding Newton’s laws.",
          icon: FaBalanceScale
        },
        {
          date: "c. 850 CE",
          title: "Development of Indian Numerals",
          description: "Indian mathematicians continued refining numeral systems, which were later adopted by the Arabs and evolved into the modern Arabic numerals used worldwide.",
          icon: HiOutlineAcademicCap
        },
        {
          date: "c. 900 CE",
          title: "Construction of Stepwells",
          description: "Intricately designed stepwells, such as Rani ki Vav, showcased advanced hydro-engineering, water conservation, and architectural excellence in medieval India.",
          icon: MdOutlineEngineering
        },
        {
          date: "c. 1000 CE",
          title: "Advancements in Metallurgy – Damascus Steel",
          description: "Indian Wootz steel, exported to the Middle East, was used to produce legendary Damascus steel swords, known for their sharpness and durability.",
          icon: FaIndustry
        },
        {
          date: "c. 1025 CE",
          title: "Mahmud of Ghazni and the Destruction of Somnath Temple",
          description: "Mahmud of Ghazni's raids exposed India's wealth, but they also accelerated advancements in fortifications and security mechanisms.",
          icon: FaShieldAlt
        },
        {
          date: "c. 1100 CE",
          title: "Advancements in Shipbuilding",
          description: "Indian shipbuilders used teakwood and iron nails to construct durable ships, influencing maritime trade across the Indian Ocean and Southeast Asia.",
          icon: FaShip
        },
        {
          date: "c. 1150 CE",
          title: "Hemachandra’s Fibonacci Sequence",
          description: "Hemachandra, a Jain mathematician, described the Fibonacci sequence in poetry and prosody, predating Fibonacci’s work in Europe.",
          icon: HiOutlineAcademicCap
        },
        {
          date: "c. 1200 CE",
          title: "Introduction of Paper in India",
          description: "Persians and Arabs introduced paper-making techniques, revolutionizing record-keeping, administration, and manuscript production in India.",
          icon: FaScroll
        },
        {
          date: "c. 1300 CE",
          title: "Iron Cannon Technology – Delhi Sultanate",
          description: "The Delhi Sultanate introduced iron cannon technology, enhancing warfare strategies and defense systems in India.",
          icon: FaCannon
        },
        {
          date: "c. 1350 CE",
          title: "Vijayanagara’s Irrigation System",
          description: "The Vijayanagara Empire developed advanced irrigation techniques, including canals, reservoirs, and aqueducts to sustain agriculture in semi-arid regions.",
          icon: MdOutlineEngineering
        },
        {
          date: "c. 1400 CE",
          title: "Zain-ul-Abidin’s Promotion of Kashmiri Arts and Technology",
          description: "The Kashmiri ruler promoted papier-mâché, carpet weaving, and the use of Persian-inspired decorative arts, fostering a rich craft tradition.",
          icon: FaPaintBrush
        },
        {
          date: "c. 1450 CE",
          title: "Advancements in Fortifications",
          description: "Massive fortifications like Raigad and Golconda Fort used scientific architectural techniques, including curved walls and strategic bastions.",
          icon: FaFortAwesome
        },
        {
          date: "c. 1500 CE",
          title: "Introduction of Gunpowder",
          description: "Gunpowder technology, introduced via Persian and Turkish influences, revolutionized Indian warfare, leading to the rise of Mughal artillery dominance.",
          icon: FaBomb
        },
        {
          date: "c. 1550 CE",
          title: "Fathullah Shirazi’s Multi-Barrel Cannon",
          description: "A Mughal engineer, Fathullah Shirazi, designed advanced artillery, including a multi-barrel cannon, significantly improving battlefield firepower.",
          icon: FaCannon
        },
        {
          date: "c. 1570 CE",
          title: "Raja Todar Mal’s Revenue System",
          description: "Raja Todar Mal introduced an advanced land revenue system based on surveys and classifications, improving tax collection under Akbar.",
          icon: FaBalanceScale
        },
        {
          date: "c. 1600 CE",
          title: "Jahangir’s Interest in Natural Sciences",
          description: "Emperor Jahangir documented flora and fauna meticulously, showing early scientific curiosity in natural history.",
          icon: FaLeaf
        },
        {
          date: "c. 1620 CE",
          title: "Shah Jahan’s Hydraulic Engineering",
          description: "The Mughals developed advanced water supply systems, including the Yamuna canal system, improving urban planning in Agra and Delhi.",
          icon: MdOutlineEngineering
        },
        {
          date: "c. 1640 CE",
          title: "Taj Mahal’s Architectural Precision",
          description: "The Taj Mahal's construction used advanced mathematical ratios, symmetry, and white marble engineering techniques, blending Persian and Indian styles.",
          icon: FaMonument
        },
        {
          date: "c. 1670 CE",
          title: "Shivaji’s Naval Power",
          description: "Shivaji Maharaj developed a powerful navy with well-armed ships, protecting the Konkan coast from foreign invasions.",
          icon: FaShip
        },
        {
          date: "c. 1690 CE",
          title: "Sawai Jai Singh’s Astronomical Observatories",
          description: "Sawai Jai Singh built five observatories across India, including Jantar Mantar in Jaipur, refining astronomical calculations and calendar systems.",
          icon: IoIosPlanet
        },
        {
          date: "c. 1700 CE",
          title: "Introduction of Printing Press",
          description: "European traders introduced the printing press in India, revolutionizing knowledge dissemination and education.",
          icon: FaBookOpen
        }
      ],
      modern: [
        {
          date: "1761",
          title: "Rocket Warfare by Mysore",
          description: "Hyder Ali and Tipu Sultan pioneered iron-cased rockets in warfare, influencing later European rocket technology.",
          icon: FaRocket
        },
        {
          date: "1837",
          title: "First Telegraph Line in India",
          description: "British India established its first experimental telegraph line between Calcutta and Diamond Harbour.",
          icon: FaBroadcastTower
        },
        {
          date: "1853",
          title: "First Railway in India",
          description: "The first passenger train ran from Mumbai to Thane, marking the beginning of Indian Railways.",
          icon: FaTrain
        },
        {
          date: "1857",
          title: "First Indian Institute of Science and Technology",
          description: "The Thomason College of Engineering (now IIT Roorkee) was established as the first technical institute in India.",
          icon: HiOutlineAcademicCap
        },
        {
          date: "1893",
          title: "Swami Vivekananda at the Chicago Parliament of Religions",
          description: "Swami Vivekananda represented India’s spiritual and philosophical thought on a global platform.",
          icon: FaGlobeAsia
        },
        {
          date: "1895",
          title: "Shivkar Bapuji Talpade’s Airplane Experiment",
          description: "An Indian scientist reportedly built and tested a flying machine, 'Marutsakha,' based on ancient Vedic texts.",
          icon: FaPlane
        },
        {
          date: "1899",
          title: "J.C. Bose’s Wireless Communication",
          description: "Jagadish Chandra Bose demonstrated radio wave transmission, preceding Marconi’s radio experiments.",
          icon: FaBroadcastTower
        },
        {
          date: "1901",
          title: "P.C. Ray’s Chemical Discoveries",
          description: "Acharya Prafulla Chandra Ray established India's first pharmaceutical company and made significant contributions to chemistry.",
          icon: FaFlask
        },
        {
          date: "1928",
          title: "C.V. Raman’s Raman Effect",
          description: "C.V. Raman discovered the Raman Effect in physics, earning India’s first Nobel Prize in Science.",
          icon: FaAtom
        },
        {
          date: "1930",
          title: "Dhanvantri’s Ayurvedic Innovations",
          description: "India’s Ayurvedic scientists worked on reviving traditional medicine and its modern applications.",
          icon: FaLeaf
        },
        {
          date: "1947",
          title: "India’s Independence and Scientific Growth",
          description: "Post-independence, India focused on scientific research, leading to the establishment of major institutions like ISRO, DRDO, and CSIR.",
          icon: FaFlag
        },
        {
          date: "1951",
          title: "First IIT Established",
          description: "IIT Kharagpur became India’s first Indian Institute of Technology, setting the foundation for technical education.",
          icon: HiOutlineAcademicCap
        },
        {
          date: "1957",
          title: "India’s First Indigenous Computer",
          description: "TIFRAC, India’s first digital computer, was developed at the Tata Institute of Fundamental Research.",
          icon: FaComputer
        },
        {
          date: "1969",
          title: "ISRO Founded",
          description: "The Indian Space Research Organisation (ISRO) was established, paving the way for India’s space missions.",
          icon: FaSatellite
        },
        {
          date: "1974",
          title: "India’s First Nuclear Test",
          description: "India conducted its first nuclear test, 'Smiling Buddha,' making it a nuclear power.",
          icon: FaRadiation
        },
        {
          date: "1983",
          title: "INSAT – India’s First Satellite System",
          description: "The INSAT system revolutionized telecommunications, broadcasting, and meteorology in India.",
          icon: FaSatelliteDish
        },
        {
          date: "1984",
          title: "Rakesh Sharma – First Indian in Space",
          description: "Rakesh Sharma became the first Indian astronaut to travel to space aboard Soyuz T-11.",
          icon: FaUserAstronaut
        },
        {
          date: "1991",
          title: "Economic Liberalization",
          description: "India opened its economy to global markets, leading to rapid technological and industrial growth.",
          icon: FaChartLine
        },
        {
          date: "1998",
          title: "Pokhran-II Nuclear Tests",
          description: "India conducted five nuclear tests, solidifying its nuclear capabilities.",
          icon: FaBomb
        },
        {
          date: "2008",
          title: "Chandrayaan-1 Mission",
          description: "ISRO launched Chandrayaan-1, India’s first lunar probe, confirming water molecules on the Moon.",
          icon: FaMoon
        },
        {
          date: "2013",
          title: "Mangalyaan – Mars Orbiter Mission",
          description: "India became the first country to reach Mars on its first attempt with the Mangalyaan mission.",
          icon: FaRocket
        },
        {
          date: "2019",
          title: "Chandrayaan-2 Mission",
          description: "India’s second lunar mission aimed at exploring the Moon’s south pole.",
          icon: FaMoon
        },
        {
          date: "2023",
          title: "Chandrayaan-3 and Aditya-L1",
          description: "Chandrayaan-3 achieved a successful soft landing on the Moon’s south pole, and Aditya-L1 was launched to study the Sun.",
          icon: FaSun
        }
      ],
      contemporary: [
        {
          date: "2008",
          title: "Chandrayaan-1 Mission",
          description: "India’s first lunar mission discovered water molecules on the Moon, marking a major milestone for ISRO.",
          icon: FaMoon
        },
        {
          date: "2010",
          title: "Aadhaar - World’s Largest Biometric ID System",
          description: "India launched the Aadhaar system, the largest biometric identification project in the world.",
          icon: FaIdCard
        },
        {
          date: "2013",
          title: "Mangalyaan - Mars Orbiter Mission",
          description: "India became the first country to successfully reach Mars on its first attempt.",
          icon: FaRocket
        },
        {
          date: "2016",
          title: "Digital India Initiative",
          description: "Government launched a nationwide campaign to improve online infrastructure and boost digital literacy.",
          icon: FaNetworkWired
        },
        {
          date: "2017",
          title: "BHIM & UPI - Revolution in Digital Payments",
          description: "India introduced UPI (Unified Payments Interface), making digital transactions seamless and accessible.",
          icon: FaMobileAlt
        },
        {
          date: "2019",
          title: "Chandrayaan-2 Mission",
          description: "India’s second lunar mission attempted a soft landing near the Moon’s south pole.",
          icon: FaMoon
        },
        {
          date: "2020",
          title: "COVID-19 Vaccine Development",
          description: "India developed Covaxin and Covishield, playing a key role in the global fight against COVID-19.",
          icon: FaSyringe
        },
        {
          date: "2022",
          title: "5G Rollout in India",
          description: "India launched 5G services, boosting internet speeds and connectivity across the country.",
          icon: FaSignal
        },
        {
          date: "2023",
          title: "Chandrayaan-3’s Historic Soft Landing",
          description: "India became the first country to land on the Moon’s south pole, achieving a major space milestone.",
          icon: FaMoon
        },
        {
          date: "2023",
          title: "Aditya-L1 Mission",
          description: "India launched its first solar mission, Aditya-L1, to study the Sun.",
          icon: FaSun
        },
        {
          date: "2024",
          title: "Gaganyaan - India's First Human Space Mission",
          description: "India is preparing to send its first crewed space mission under the Gaganyaan program.",
          icon: FaUserAstronaut
        },
        {
          date: "2024",
          title: "Quantum Computing & AI Growth",
          description: "India is investing in quantum computing and AI research, leading to breakthroughs in technology.",
          icon: FaBrain
        }
      ]
  };
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setTabSize('sm');
      } else if (window.innerWidth >= 1024) {
        setTabSize('lg');
      } else {
        setTabSize('md');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-bodybg">
      <Sidebar Links={Links} className="flex-none w-full md:w-auto" />

      <div className="flex-1 flex flex-col overflow-hidden sm:ml-8">
        <Header />
        <div className="flex-1 overflow-x-hidden overflow-y-auto p-4 sm:ml-20">


        <div className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4 relative -mt-16 md:-mt-20 rounded-lg">
  {/* Glowing Text with Hover Effect */}
  <h1 className="rounded-lg text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,165,0,0.8)] mb-4 md:mb-6 relative z-10 transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_0_50px_rgba(255,165,0,1)]">
    Timeline of India's Scientific Achievements
  </h1>

  {/* Subtext with a Glow Effect */}
  <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-100 opacity-90 max-w-md sm:max-w-lg md:max-w-3xl relative z-10 transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]">
    Explore India's rich scientific heritage from ancient times to the present day.
  </p>

  {/* Enhanced Neon Background with Animation */}
  <div className="absolute top-[50%] sm:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[85%] md:w-[90%] h-[40%] sm:h-1/2 bg-gradient-to-r from-orange-500 via-white to-green-500 opacity-50 sm:opacity-60 rounded-2xl blur-[60px] sm:blur-[80px] shadow-[0_0_60px_rgba(255,165,0,0.7)] transition-all duration-700 animate-pulse hover:scale-105 sm:hover:scale-110 hover:opacity-70"></div>

  {/* Additional Floating Neon Rings for a Futuristic Effect */}
  <div className="absolute top-[20%] sm:top-[25%] left-1/2 -translate-x-1/2 w-[200px] sm:w-[250px] md:w-[300px] h-[100px] sm:h-[130px] md:h-[150px] border-2 sm:border-4 border-orange-400 rounded-full blur-lg opacity-60 animate-spin-slow"></div>
  <div className="absolute top-[60%] sm:top-[65%] left-1/2 -translate-x-1/2 w-[250px] sm:w-[300px] md:w-[350px] h-[120px] sm:h-[150px] md:h-[180px] border-2 sm:border-4 border-green-400 rounded-full blur-lg opacity-60 animate-spin-reverse-slow"></div>
</div>



{/* <div className="w-full h-screen flex flex-col justify-center items-center text-center px-4 relative -mt-28">
  <h1 className="text-6xl font-extrabold bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent drop-shadow-xl mb-6 relative z-10 transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(255,165,0,0.6)]">
    Timeline of India's Scientific Achievements
  </h1>

  <p className="text-2xl text-black font-medium opacity-95 max-w-3xl relative z-10 transition-transform duration-300 hover:scale-105">
    Explore India's rich scientific heritage from ancient times to the present day.
  </p>

  <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-1/2 bg-gradient-to-r from-orange-400 via-white to-green-400 opacity-40 rounded-2xl blur-2xl shadow-lg transition-all duration-500 hover:scale-110 hover:opacity-50"></div>
</div> */}



          {/* Breadcrumbs */}
          <div className="flex flex-col flex-wrap gap-4 my-2">
            <Breadcrumbs key="solid" variant="solid">
              <BreadcrumbItem
                href={homeLink.href}
                // startContent={
                //   homeLink && <homeLink.icon className="home-icon" />
                // }
              >
                {/* Home */}
              </BreadcrumbItem>
              <BreadcrumbItem>Timeline</BreadcrumbItem>
            </Breadcrumbs>
          </div>
          <Tabs
            selectedKey={selected}
            onSelectionChange={setSelected}
            aria-label="Time Periods"
            color="default"
            size={tabSize}
            className="w-full flex justify-center text-sidebarbg"
          >
            <Tab key="ancient" title={
              <div className="flex items-center space-x-1 ">
                <HiOutlineAcademicCap/>
                <span>Ancient (Pre-1000 CE)</span>
              </div>}>
              <div className="mt-8 relative">
                {/* Vertical line for timeline */}
                <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-sidebarbg"></div>
                
                {timelineData.ancient.map((event, index) => (
                  <TimelineEvent
                    key={index}
                    date={event.date}
                    title={event.title}
                    description={event.description}
                    icon={event.icon}
                    index={index}
                  />
                ))}
              </div>
            </Tab>
            <Tab key="medieval" title={
              <div className="flex items-center space-x-1">
                <MdOutlineEngineering/>
                <span>Medieval (1000-1800)</span>
              </div>}>
              <div className="mt-8 relative">
                {/* Vertical line for timeline */}
                <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-sidebarbg"></div>
                
                {timelineData.medieval.map((event, index) => (
                  <TimelineEvent
                    key={index}
                    date={event.date}
                    title={event.title}
                    description={event.description}
                    icon={event.icon}
                    index={index}
                  />
                ))}
              </div>
            </Tab>
            <Tab key="modern" title={
              <div className="flex items-center space-x-1">
                <FaAtom/>
                <span>Modern (1900-1990)</span>
              </div>}>
              <div className="mt-8 relative">
                {/* Vertical line for timeline */}
                <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-sidebarbg"></div>
                
                {timelineData.modern.map((event, index) => (
                  <TimelineEvent
                    key={index}
                    date={event.date}
                    title={event.title}
                    description={event.description}
                    icon={event.icon}
                    index={index}
                  />
                ))}
              </div>
            </Tab>
            <Tab key="contemporary" title={
              <div className="flex items-center space-x-1">
                <FaRocket/>
                <span>Contemporary (1990-Present)</span>
              </div>}>
              <div className="mt-8 relative">
                {/* Vertical line for timeline */}
                <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-sidebarbg"></div>
                
                {timelineData.contemporary.map((event, index) => (
                  <TimelineEvent
                    key={index}
                    date={event.date}
                    title={event.title}
                    description={event.description}
                    icon={event.icon}
                    index={index}
                  />
                ))}
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      
      {/* Updated timeline styles */}
      <style jsx global>{`
.bird {
  background-color: #808080;
  border-radius: 20px;
  transition: box-shadow 0.5s ease-in-out;
}

.bird:hover {
  box-shadow: 0 0 20px 70px #ffffff;
}



        .timeline-item {
          position: relative;
          margin-bottom: 2rem;
        }
        
        .timeline-center {
          position: relative;
          z-index: 20;
        }
        
        /* This makes the vertical line continue after each icon */
        .timeline-center::after {
          content: '';
          position: absolute;
          width: 1px;
          background-color: transparent; /* Make this transparent since we're using the main line */
          top: 24px;
          bottom: -24px;
          left: 50%;
          margin-left: -0.5px;
        }
        
        /* Hide the continuing line for the last item */
        .timeline-item:last-child .timeline-center::after {
          display: none;
        }
        
        /* Mobile responsiveness improvements */
        @media (max-width: 768px) {
          .timeline-item {
            flex-direction: column;
            align-items: center;
          }
          
          .timeline-item > div {
            width: 100% !important;
            padding: 0 !important;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
