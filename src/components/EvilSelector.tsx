export default function EvilSelector({evilOptions, handleClick}) {

    const options = evilOptions.map((option: { value: string, name: string }) => {
        return <button
            className={'modal-btn'}
            onClick={() => handleClick(option)} key={option.name}>{option.name}</button>
    })

    return <div className={'evil-modal'}>
        <h3>Pick your trick...</h3>
        {options}
        <button className={'none modal-btn'} onClick={() => handleClick(null)}>None</button>
    </div>

}