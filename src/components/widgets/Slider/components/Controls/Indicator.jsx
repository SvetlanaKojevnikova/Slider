export default function Indicator({ index, activePanel, updateActivePanel }) {
    let classNames = styles.content;
    if (index == activePanel) {
      classNames = classNames.concat(" ", styles["active"]);
    }
  
    const callback = useCallback(() => {
      updateActivePanel(index);
    }, [index, updateActivePanel]);
  
    return <div className={classNames} onClick={callback} key={index}></div>;
  }

  

  
  
 