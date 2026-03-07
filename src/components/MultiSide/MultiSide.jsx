import './MultiSide.css';
const SUB = [
  { id:1, icon:'🖼️', title:'Text to Image',           desc:'Generate captivating images from text prompts using our Text to Single or Multiple Image tool, making it easy to visualize your concepts.' },
  { id:2, icon:'🔄', title:'Multi Side Image to 3D',  desc:'Create front, side, and back view images of your concept, then transform them into a high-quality 3D model that brings your vision to life.' },
  { id:3, icon:'🎨', title:'AI Texture Editing',       desc:'Create unlimited textures on the same mesh and refine colors, patterns, or materials simply by adjusting your prompts.' },
];
export default function MultiSide() {
  return (
    <section className="multiside section-wrap section-pad">
      <div className="multiside__card">
        <div className="multiside__header">
          <h2 className="multiside__title">Upload Multiple Side Image of an Object and Generate 3D</h2>
          <p className="multiside__subtitle">Take full control of the creation process — tweak input settings, refine results, and fine-tune every detail until the final asset matches your vision.</p>
        </div>
        <div className="multiside__grid">
          {SUB.map(f => (
            <div key={f.id} className="multiside__sub-card">
              <span className="multiside__sub-icon">{f.icon}</span>
              <h4 className="multiside__sub-title">{f.title}</h4>
              <p className="multiside__sub-desc">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="multiside__retry-banner">
          <span>♻️</span>
          <div><span className="multiside__retry-label">Free Retry — </span><span className="multiside__retry-text">With the same prompt, you can re-generate models for free, so you achieve the result you want.</span></div>
        </div>
      </div>
    </section>
  );
}
