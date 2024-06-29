import PromptCard from "./PromptCard";
const Profile = ({name, desc, data, handleEdit, handleDelete}) => {
  return (
    <section className = "w-full">
      <h1 className = "head_text">
        <span className = "blue_gradient">{name}</span>
        's Profile
      </h1>

      <div className = "mt-16 prompt_layout flex-center">
        {data.map((post) => (
          <PromptCard 
            key = {post._id}
            post = {post}
            handleTagClick = {() => {}}
            handleEdit = {() => handleEdit && handleEdit(post)}
            handleDelete = {() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  )
}

export default Profile