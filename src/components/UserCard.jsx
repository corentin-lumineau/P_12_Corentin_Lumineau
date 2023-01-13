import PropTypes from 'prop-types'

/**
 * Display the user card
 * @component
 * @returns {JSX.Element} UserCard component
 */


function UserCard({name}) {
    return(
        <p>
            {name}
        </p>
    )
}

UserCard.propTypes = {
    name: PropTypes.string
}
export default UserCard