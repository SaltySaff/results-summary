import PropTypes from 'prop-types';

export default function Button({ children }) {
  return (
    <button className="w-full rounded-full bg-dark-gray-blue py-4 text-lg font-bold text-white hover:bg-dark-gray-blue/90 sm:mt-1">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
