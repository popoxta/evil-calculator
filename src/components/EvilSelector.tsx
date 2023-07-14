export default function EvilSelector({evilOptions, handleClick}) {

    evilOptions.map((option: { value: string, title: string }) => {
        return <button onClick={handleClick} value={option.value}>{option.title}</button>
    })

    return <div className={'evil-modal'}>
        {evilOptions}
    </div>

}