import { connect } from 'react-redux';

import { pathSelector } from '../selectors';
import { currentUserSelector } from '../selectors';
import Static from '../components/Static';

const mapStateToProps = (state) => {
  const { cardId, boardId, projectId } = pathSelector(state);
  const {email,name} = currentUserSelector(state);

  return {
    cardId,
    boardId,
    projectId,
    email,
    name,
  };
};

export default connect(mapStateToProps)(Static);
