import { SectionWrapper } from '@/hoc';
import { services } from '@/constants';
import { styles } from '@/styles';
import { fadeIn, textVariant } from '@/utils/motion';
import { motion } from 'framer-motion';
import ReactParallaxTilt from 'react-parallax-tilt';

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => {
  return (
    <ReactParallaxTilt tiltMaxAngleX={30} tiltMaxAngleY={30} className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt="title" className="h-16 w-16 object-contain" />
          <h3 className="text-white text-xl font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </ReactParallaxTilt>
  );
};

const AboutPage = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I am an enthusiastic Data Engineer with expertise in handling and analyzing large datasets. Proficient in tools like
        Python, SQL, Apache Airflow, Apache Spark, Hadoop, and Kafka, I specialize in optimizing data processing and storage
        workflows. With experience working with databases such as MySQL, PostgreSQL, and NoSQL, I design and implement efficient,
        scalable data solutions. I am passionate about continuous learning and enjoy collaborating closely with teams to develop
        powerful data-driven solutions that enable businesses to make informed decisions.
      </motion.p>
      <div className="mt-20 flex justify-center flex-wrap gap-10">
        {services.map((service, idx: number) => (
          <ServiceCard key={idx} index={idx} {...service} />
        ))}
      </div>
    </>
  );
};

const About = SectionWrapper(AboutPage, 'about');

export default About;
