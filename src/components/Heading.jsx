const Heading = ({ headingText }) => {
  return (
    <div className="flex items-center gap-2 ">
      <div className="h-2 w-2 rounded-full bg-[var(--bg-orange-dark)]"></div>
      <h3 className="text-lg font-bold text-[var(--text-gray-dark)]">
        {headingText}
      </h3>
    </div>
  )
}

export default Heading
