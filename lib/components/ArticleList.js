import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';

// Required Components
import Article from './Article';

class ArticleList extends PureComponent {
    render(){
        return (
            <div>
                {Object.values(this.props.articles).map(article => 
                    <Article 
                        key={article.id} 
                        article={article} 
                    />  
                )}
            </div>
        );
    }
}

ArticleList.propTypes = {
    articles: PropTypes.object.isRequired,
};

export default ArticleList;