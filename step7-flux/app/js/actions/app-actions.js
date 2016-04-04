import AppConstants from '../constants/app-constants';
import {dispatch, register} from '../dispatchers/app-dispatcher';

export default{
	addItem(item){
		dispatch({
			actionType: AppConstants.ADD_ITEM, item
		});
	}
}