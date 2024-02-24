import avatarImg from '@/assets/avatar.jpg'
import Calendar from '@/assets/app-image.svg';
import './style.scss';

export default function About() {
  return (
    <div className="about">
        <h1>About</h1>
        {__PLATFORM__ === "desktop" && (
          <p className="platform">Only for <strong>desctop</strong></p>
        )}
        {__PLATFORM__ === "mobile" && (
          <p className="platform">Only for <strong>mobile</strong></p>
        )}
        <img className="avatar" src={avatarImg} alt="avatar" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ipsa, odio eligendi minima repudiandae dignissimos. Voluptates quae et expedita cupiditate repudiandae quasi nam laudantium corrupti a minima quibusdam, nobis enim.
        Ullam facere consequatur ipsam, culpa dicta minima totam blanditiis sequi mollitia recusandae sit, natus ut dolor assumenda repudiandae rerum. Similique excepturi vel facere ea officiis. Consequuntur nostrum doloremque ut est!
        Repellendus animi sint ea molestiae. Sunt nisi accusamus numquam animi voluptate iusto maxime! Maiores beatae recusandae libero blanditiis rerum asperiores, animi unde esse, dolorum aliquid cupiditate omnis neque repellat molestias.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ipsa, odio eligendi minima repudiandae dignissimos. Voluptates quae et expedita cupiditate repudiandae quasi nam laudantium corrupti a minima quibusdam, nobis enim.
        Ullam facere consequatur ipsam, culpa dicta minima totam blanditiis sequi mollitia recusandae sit, natus ut dolor assumenda repudiandae rerum. Similique excepturi vel facere ea officiis. Consequuntur nostrum doloremque ut est!
        Repellendus animi sint ea molestiae. Sunt nisi accusamus numquam animi voluptate iusto maxime! Maiores beatae recusandae libero blanditiis rerum asperiores, animi unde esse, dolorum aliquid cupiditate omnis neque repellat molestias.</p>
        <div className="calendar">
          <Calendar width={60} height={60} />
        </div>
    </div>
  )
}
