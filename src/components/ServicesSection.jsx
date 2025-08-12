import services from '../assets/data/services.json';
import Section from './Section';
import ServiceCard from './ServiceCard';
import videoIcon from '../assets/icons/service-video.svg';
import websiteIcon from '../assets/icons/service-website.svg';
import displayIcon from '../assets/icons/service-display.svg';
import './ServicesSection.css';

const iconMap = {
  storytelling: videoIcon,
  downgreat: websiteIcon,
  upgive: displayIcon,
};

export default function ServicesSection() {
  return (
    <Section className="services-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-display font-bold text-center mb-10">Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.title}
              excerpt={s.excerpt}
              slug={s.slug}
              icon={iconMap[s.slug]}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
