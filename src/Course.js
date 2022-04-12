const Title = ({ title }) => <h1>{title}</h1>

const Part = (props) => {
  const { part, exercises } = props;
  return (
    <p>{part} {exercises}</p>
  )
}

const Content = ({parts}) => {
  return (
    <>
      {parts.map((part) => <Part key={part.id} part={part.name} exercises={part.exercises}/>)}
      
    </>
  )
}


const Total = ({parts}) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0 )
  return (
    <b>Number of exercises {total} </b>
  )
}

const Course = ({course}) => {
  return (
    <>
    <Title title={course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
    </>
  )
}
export default Course