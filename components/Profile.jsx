import PromptCard from "./PromptCard";
const Profile = ({name, desc, data, handleEdit, handleDelete}) => {
  return (
    <section className = "w-full">
      <h1 className = "head_text">
        <span className = "blue_gradient">{name}</span>
        's Profile
      </h1>

      <div className = "mt-16 prompt_layout flex-center">
        {data.map((item) => (
          <PromptCard 
            key = {item._id}
            post = {item}
            handleTagClick = {() => {}}
            handleEdit = {() => handleEdit && handleEdit(item)}
            handleDelete = {() => handleDelete && handleDelete(item)}
          />
        ))}
      </div>
    </section>
  )
}

export default Profile