import './app-lugat-item.css';
import styled from 'styled-components';

const size = '24px';
const Wrapper = styled.li`
      margin:0 0 auto;
      color: black;
      font-size: ${size};
`;

const AppLugatItem = ({uzbek, arabic, onDelete, onToggleSelect}) => {
    return (
        <div className="app-lugat-item">
            <Wrapper>
                     <div class="col-sm">
                        <ul>{uzbek} - {arabic}</ul> 
                        <button 
                            type='button' 
                            className='btn-trash btn-sm'
                            onClick={onDelete}> 
                            <i className='fas fa-trash'></i>
                        </button>
                        <button type="button"
                            className="btn-star btn-sm "
                            onClick={onToggleSelect}>
                            <i className="fas fa-star"></i>
                        </button>
                    </div>
            </Wrapper>
        </div>
    )
}

export default AppLugatItem;