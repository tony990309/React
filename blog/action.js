// action types 
export const POST = 'POST';

// action creators
export function post(article){
    console.log(
        "Article : {"
        + "\n\tboard : " + article.board
        + "\n\ttitle : " + article.title
        + "\n\tcontent : " + article.content
        + "\n}"
    );
    return {
        type : POST,
        article : article
    }
};