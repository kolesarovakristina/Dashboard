import ThemeConst from "../../src/redux/consts/theme.const";
import ThemeActions from '../../src/redux/actions/theme.action';



describe('theme action', () => {
    it('should create an action to switch a color ', () => {
        const booleanValue = false
        const expectedAction = {
            type: ThemeConst.THEME_COLOR,
            payload: booleanValue
        }
        expect(ThemeActions.themeColorAction(booleanValue)).toEqual(expectedAction)
    })
})
