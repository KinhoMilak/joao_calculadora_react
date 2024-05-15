import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);


  const putDot = () => {
    if (currentValue = '0'|| '0.') {
      currentValue = '0.';
    } else 
      if (!currentValue.includes('.')) {
      
      currentValue = currentValue + '.';
    }else {currentValue = currentValue}
    setDisplayValue(currentValue);
  }

  const handleNumberPress = (num) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num.toString());
    }
  };

  const handleOperatorPress = (op) => {
    setPrevValue(parseFloat(displayValue));
    setOperator(op);
    setDisplayValue('0');
  };

  const handleEqualsPress = () => {
    const currentValue = parseFloat(displayValue);
    let result = 0;

    switch (operator) {
      case '+':
        result = prevValue + currentValue;
        break;
      case '-':
        result = prevValue - currentValue;
        break;
      case 'x':
        result = prevValue * currentValue;
        break;
      case '/':
        result = prevValue / currentValue;
        break;
      default:
        break;
    }

    setDisplayValue(result.toString());
    setPrevValue(null);
    setOperator(null);
  };

  const handleClearPress = () => {
    setDisplayValue('0');
    setPrevValue(null);
    setOperator(null);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Text style={styles.display}>{displayValue}</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={handleClearPress} style={styles.operatorButton}>
          <Text style={styles.clearButtonText}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => putDot()} style={styles.operatorButton}>
          <Text>.</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumberPress(null)} style={styles.operatorButton}>
          <Text>nd</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperatorPress('+')} style={styles.operatorButton}>
          <Text style={styles.operatorText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleNumberPress(7)} style={styles.numberButton}>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumberPress(8)} style={styles.numberButton}>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumberPress(9)} style={styles.numberButton}>
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperatorPress('/')} style={styles.operatorButton}>
          <Text style={styles.operatorText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleNumberPress(4)} style={styles.numberButton}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumberPress(5)} style={styles.numberButton}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumberPress(6)} style={styles.numberButton}>
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperatorPress('x')} style={styles.operatorButton}>
          <Text style={styles.operatorText}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleNumberPress(1)} style={styles.numberButton}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumberPress(2)} style={styles.numberButton}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNumberPress(3)} style={styles.numberButton}>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperatorPress('-')} style={styles.operatorButton}>
          <Text style={styles.operatorText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleNumberPress(0)} style={[styles.numberButton, { flex: 2 }]}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEqualsPress} style={[styles.operatorButton, { flex: 2 }]}>
          <Text style={styles.operatorText}>=</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 0,
  },
  numberButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
    backgroundColor: '#fff',
  },
  operatorButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  operatorText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  display: {
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'right',
  },
  clearButton: {
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  clearButtonText: {
    color: 'red',
    fontSize: 20,
  },
});

export default Calculator;
