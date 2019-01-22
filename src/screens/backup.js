<View style={styles.buatbox}>
  {daftarHadist.map((data) => (
    <View
      key={data.id}
    >
        <TouchableOpacity
          onPress = {() => this.props.navigation.navigate('Detail', {
            idItem: data.id,
          })}
        >
            
          <View style={styles.boxJudul}>
            <Text style={styles.nomor}>Hadist Ke-{data.id}</Text>
            <Text style={styles.judul}>" {data.judul} "</Text>
          </View>
        
        </TouchableOpacity>
    </View>
  ))}
</View>