export default function EvilSelector({evilOptions, handleClick}) {

    const options = evilOptions.map((option: { value: string, name: string }) => {
        return <button onClick={() => handleClick(option)} key={option.name}>{option.name}</button>
    })

    return <div className={'evil-modal'}>
        {options}
        <button onClick={() => handleClick(false)}>None</button>
    </div>

}