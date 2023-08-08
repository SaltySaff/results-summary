import PropTypes from 'prop-types'

export default function Button({children}) {
    return (
        <button className='sm:mt-1 bg-dark-gray-blue hover:bg-dark-gray-blue/90 text-white w-full py-4 rounded-full text-lg font-bold'>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired
}