function SkillList({src, skill}) {
  return (
  <span>
    <img src={src} alt="check mark Icon" />
    <p>{skill}</p>
  </span>
  )
}

export default SkillList