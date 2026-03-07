import useScrollReveal from '../../hooks/useScrollReveal';
import './MultiSide.css';

export default function MultiSide() {
  const ref = useScrollReveal();
  return (
    <section className="multiside section-wrap section-pad" ref={ref}>
      <div className="multiside__header sr">
        <h2 className="multiside__title">
          Upload Multiple Side Image<br/>
          <span className="multiside__title-green">of an Object and Generate 3D</span>
        </h2>
        <p className="multiside__subtitle">
          Take full control of the creation process — tweak input settings, refine results,
          and fine-tune every detail until the final asset matches your vision.
        </p>
      </div>
      <div className="multiside__bento">
        <div className="multiside__row">
          <div className="multiside__card bento-teal sr" style={{transitionDelay:'.08s'}}>
            <div className="bento-img-wrapper">
              <img src="/retry-preview.png" alt="Free Retry"/>
            </div>
            <div className="bento-text">
              <h3>Free Retry</h3>
              <p>With the same prompt, re-generate models for free until you achieve exactly the result you want.</p>
            </div>
          </div>
          <div className="multiside__card bento-teal sr" style={{transitionDelay:'.16s'}}>
            <div className="bento-img-wrapper">
              <img src="/monster.png" alt="Multi side 3D model"/>
            </div>
            <div className="bento-text">
              <h3>Multi Side Image to 3D</h3>
              <p>Create front, side, and back view images of your concept, then transform them into a high-quality 3D model.</p>
            </div>
          </div>
        </div>
        <div className="multiside__card bento-teal bento-horizontal sr" style={{transitionDelay:'.24s'}}>
          <div className="bento-text">
            <h3>AI Texture Editing</h3>
            <p>Create unlimited textures on the same mesh and refine colours, patterns, or materials by adjusting your prompts.</p>
          </div>
          <div className="bento-img-wrapper">
            <img src="/texture-preview.png" alt="AI texture editing"/>
          </div>
        </div>
      </div>
    </section>
  );
}
